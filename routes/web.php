<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');

// SuperAdmin Routes
Route::middleware(['auth'])->prefix('superadmin')->group(function () {
    // Quiz Management Routes
    Route::get('/questionbank', fn () => Inertia::render('SuperAdmin/QuestionBank'))->name('superadmin.questionbank');
    Route::get('/addquestion', fn () => Inertia::render('SuperAdmin/AddQuestion'))->name('superadmin.addquestion');
    Route::get('/categories', fn () => Inertia::render('SuperAdmin/Categories'))->name('superadmin.categories');
    Route::get('/questionsettings', fn () => Inertia::render('SuperAdmin/QuestionSettings'))->name('superadmin.questionsettings');
    Route::get('/buzzersystem', fn () => Inertia::render('SuperAdmin/BuzzerSystem'))->name('superadmin.buzzersystem');
});

require __DIR__.'/auth.php';
