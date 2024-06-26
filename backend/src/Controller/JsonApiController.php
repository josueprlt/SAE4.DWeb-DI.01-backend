<?php

namespace App\Controller;

use App\Entity\Category;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Movie;
use App\Repository\MovieRepository;
use App\Repository\CategoryRepository;

class JsonApiController extends AbstractController
{
    #[Route('/json/api', name: 'app_json_api')]
    public function index(): Response
    {
        return $this->render('json_api/index.html.twig', [
            'controller_name' => 'JsonApiController',
        ]);
    }

    #[Route('/api/movies', name: 'app_api_movies')]
    public function readAllMovies(MovieRepository $movieRepository, SerializerInterface $serializer): Response
    {
        $movies = $movieRepository->findAll();
        
        $data = $serializer->normalize($movies, null, ['groups' => 'json_movie']);
        $response = new JsonResponse($data);
        return $response;
    }

    #[Route('/api/movie/{id}', name: 'app_api_movie')]
    public function readMovie(Movie $mov, SerializerInterface $serializer): Response
    {
        // $serializer est un service de Symfony injecté dans la méthode readMovie
        // $data est la représentation serialisée/normalisée de l'entity $mov
        $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
        // $response est une instance de JsonResponse qui hérite de Response
        // C'est la classe à utiliser lorsque l'on veut retourner du JSON
        // $data sera automatiquement encodé en JSON
        $response = new JsonResponse($data);
        return $response;
    }

    #[Route('/api/research/{name}', name: 'app_api_research_movie')]
    public function readResearch($name, MovieRepository $movieRepository, SerializerInterface $serializer): Response
    {
        $research = $movieRepository->findByInputResearch($name);

        $data = $serializer->normalize($research, null, ['groups' => 'json_category']);
        $response = new JsonResponse($data);
        return $response;
    }



    #[Route('/api/carousel', name: 'app_api_carousel')]
    public function readCarousel(MovieRepository $movieRepository, SerializerInterface $serializer): Response
    {
        $carousel = $movieRepository->findForCarousel();

        $data = $serializer->normalize($carousel, null, ['groups' => 'json_category']);
        $response = new JsonResponse($data);
        return $response;
    }




    #[Route('/api/categories', name: 'app_api_categories')]
    public function readAllCategories(CategoryRepository $cats, SerializerInterface $serializer): Response
    {
        $gategories = $cats->findAll();

        $data = $serializer->normalize($gategories, null, ['groups' => 'json_category']);
        $response = new JsonResponse($data);
        return $response;
    }

    #[Route('/api/category/{id}', name: 'app_api_category')]
    public function readCategory(Category $cat, SerializerInterface $serializer): Response
    {
        // $serializer est un service de Symfony injecté dans la méthode readMovie
        // $data est la représentation serialisée/normalisée de l'entity $mov
        $data = $serializer->normalize($cat, null, ['groups' => 'json_category']);
        // $response est une instance de JsonResponse qui hérite de Response
        // C'est la classe à utiliser lorsque l'on veut retourner du JSON
        // $data sera automatiquement encodé en JSON
        $response = new JsonResponse($data);
        return $response;
    }
}
