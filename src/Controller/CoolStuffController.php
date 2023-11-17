<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class CoolStuffController extends AbstractController
{
    /**
     * @Route("/cool/stuff", name="app_cool_stuff")
     */
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/CoolStuffController.php',
        ]);
    }

    /**
     * @Route("/blog/{page}", name="app_blog_page", requirements={"page"="\d+"})
     */
    public function page($page): JsonResponse
    {
        return $this->json([
            'message' => 'page : '.$page,
        ]);
    }

    /**
     * @Route("/blog/{slug}", name="app_blog_slug", requirements={"slug"="[a-z]+"})
     */
    public function blog($slug): JsonResponse
    {
        return $this->json([
            'message' => $slug,
        ]);
    }

    /**
     * @Route("/blog", name="app_blog")
     */
    public function article(): JsonResponse
    {
        return $this->json([
            'message' => 'Liste des articles',
        ]);
    }
}
