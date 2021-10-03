<?php

namespace App\Controller\Pages;

use App\Entity\Contact;
use App\Entity\Newsletter;
use App\Form\ContactType;
use App\Form\NewsletterType;
use App\Repository\ArticleRepository;
use App\Repository\SliderRepository;
use App\service\MailerService;
use Doctrine\ORM\EntityManagerInterface;
use MercurySeries\FlashyBundle\FlashyNotifier;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController

{

    /**
     * @var FlashyNotifier
     */
    private FlashyNotifier $flashy;


    public function __construct( FlashyNotifier $flashy )
    {
        $this->flashy = $flashy;
    }

    /**
     * @Route("/", name="home")
     * @param SliderRepository $sliderRepository
     * @param ArticleRepository $articleRepository
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return void
     */
    public function index(SliderRepository $sliderRepository, ArticleRepository $articleRepository, Request $request, EntityManagerInterface $manager): Response
    {
        $sliders = $sliderRepository->findByIsDisplayed(true);
        $articles = $articleRepository->findBy([], array("id"=>'DESC'), 3);
        $newsletter = new Newsletter();
        $form = $this->createForm(NewsletterType::class, $newsletter);

        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid())
        {
            $manager->persist($newsletter);
            $manager->flush();
            $newsletter = new Newsletter();
            $form = $this->createForm(NewsletterType::class, $newsletter);
            //add flasy
            $this->flashy->success('Vous étes bien inscris merci !');
        }
        if($form->isSubmitted() && !$form->isValid()){
            $this->flashy->error('Vérifier votre email, c\'est incorrect !');
        }

        return $this->render('pages/home.html.twig' ,["sliders"=>$sliders, "articles"=>$articles, 'form'=>$form->createView()]);
    }

    /**
     * @Route("/my-travel-agencey", name="my_travel_agencey", methods={"get"})
     */
    public function myTravelAgency(): Response
    {
        return $this->render('pages/my_travel_agencey.html.twig');
    }

    /**
     * @Route("/contact", name="contact", methods={"GET|POST"})
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @param MailerService $mailerService
     * @param MailerInterface $mailer
     * @return Response
     */
    public function contact (Request $request, EntityManagerInterface $manager, MailerService $mailerService, MailerInterface $mailer)
    {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid())
        {
            $manager->persist($contact);
            $manager->flush();
            //envoie de mail
            $mail = $mailerService->sendEmail($contact);
            $mailer->send($mail);

            $contact = new Contact();
            $form = $this->createForm(ContactType::class, $contact);
            //add flasy
            $this->flashy->success('Votre message a ete bien envoyer');

        }
        if($form->isSubmitted() && !$form->isValid())
            $this->flashy->error('Le formulaire remplie contie des ereurs veuillez les corriger ');

        return $this->render("pages/contact.html.twig",
            ['form'=>$form->createView()]) ;
    }
}
