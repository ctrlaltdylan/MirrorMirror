<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {


    return view('mirror', [
   		'greetings' => config('mirror.greetings'),
   		'woeid' => config(env('WOEID'));
    ]);
});

$app->get('/version', function() use ($app) {
	$hash = trim(`git rev-parse HEAD`); 

	return [
		'version' => $hash,
	]; 
});