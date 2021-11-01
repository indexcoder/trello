<template>
    <div class="bg-white sm:bg-gray-100 h-full flex justify-center">
        <div class="w-96 mt-2 sm:mt-10 flex flex-col items-center">
            <h1 class="mb-4">Laravello</h1>
            <div class="w-full sm:shadow-xl sm:bg-white sm:py-8 sm:px-12">
                <p class="text-gray-600 font-bold mb-8 text-center">Sign up to your account</p>
                <form action="" class="w-full mb-6">
                    <input type="text" placeholder="Enter email" class="mb-4 text-gray-700 rounded-sm px-4 py-2 outline-none focus:outline-none border-gray-400 bg-gray-100 border-2 w-full text-sm">
                    <input type="text" placeholder="Enter full name" class="mb-4 text-gray-700 rounded-sm px-4 py-2 outline-none focus:outline-none border-gray-400 bg-gray-100 border-2 w-full text-sm">
                    <input type="password" placeholder="Enter password" class="mb-4 text-gray-700 rounded-sm px-4 py-2 outline-none focus:outline-none border-gray-400 bg-gray-100 border-2 w-full text-sm">
                    <button type="submit" class="rounded-sm px-4 py-2 text-sm bg-green-500 font-bold outline-none focus:outline-none hover:bg-opacity-75 block w-full text-white disabled:opacity-25">Signup</button>
                </form>
                <div class="bg-gray-400 h-px w-full mb-6"></div>
                <div class="text-center text-sm">
                    <router-link :to="{name: 'login'}" class="text-blue-600 hover:underline">Already have an account? Log in</router-link>
                </div>
            </div>
        </div>
    </div>
</template>