import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="card bg-base-100 w-full shadow-xl border border-base-200 p-8 sm:p-10 flex flex-col items-center">
          
          <BookOpen className="w-10 h-10 text-primary mb-4" strokeWidth={2} />
          
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-base-content tracking-tight mb-2">
            Sign in to your account
          </h2>
          <p className="text-center text-sm text-base-content/60 mb-8">
            Or{' '}
            <Link to="/signup" className="link link-primary font-medium">
              create a new account
            </Link>
          </p>

          <form className="w-full space-y-4" action="#" method="POST">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Email address</span>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="jane@example.com"
                className="input input-bordered input-primary w-full"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Password</span>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="input input-bordered input-primary w-full"
              />
            </label>

            <div className="flex items-center justify-between pt-2">
              <label className="label cursor-pointer justify-start gap-2 p-0">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <span className="label-text">Remember me</span>
              </label>

              <a href="#" className="label-text-alt link link-primary font-medium">
                Forgot your password?
              </a>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
