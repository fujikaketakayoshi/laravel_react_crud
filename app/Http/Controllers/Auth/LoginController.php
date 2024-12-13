<?php
declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
//use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
//    use AuthenticatesUsers;
    
    public function login(Request $request) {
//        $this->validateLogin($request);
        $result = false;
        $status = 401;
        $message = 'user not found.';
        $user = null;
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $result = true;
            $status = 200;
            $message = 'OK';
            $user = Auth::user();
            $user->tokens()->where('name', 'token-name')->delete();
            $token = $user->createToken('token-name')->plainTextToken;
        }
        return response()->json([
            'credentials' => $credentials,
            'result' => $result,
            'status' => $status,
            'user' => $user,
            'message' => $message,
        ]);
    }
    
    public function logout(Request $request){
        Auth::logout();
        $request->session()->invalidate(); // セッションを無効化
        $request->session()->regenerateToken(); // CSRFトークンを再生成
        
        $cookie = cookie('laravel_session', null, -1, '/', null, false, true);
        $csrfCookie = cookie('XSRF-TOKEN', null, -1, '/', null, false, false);
        
        $result = true;
        $status = 200;
        $message = 'logouted.';
        return respnse()->json([
            'result' => $resutl,
            'status' => $status,
            'message' => $message,
        ])->withCookie($cookie)->withCookie($csrfCookie);
    }
}
