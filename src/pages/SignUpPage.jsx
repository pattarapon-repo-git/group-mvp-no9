import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="card bg-base-100 w-full shadow-xl border border-base-200 p-8 sm:p-10 flex flex-col items-center">
          
          <BookOpen className="w-10 h-10 text-primary mb-4" strokeWidth={2} />
          
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-base-content tracking-tight mb-2">
            Create an account
          </h2>
          <p className="text-center text-sm text-base-content/60 mb-8">
            Or{' '}
            <Link to="/signin" className="link link-primary font-medium">
              sign in to your existing account
            </Link>
          </p>

          <form className="w-full space-y-4" action="#" method="POST">
            <div className="grid grid-cols-2 gap-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">First Name</span>
                </div>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="Jane"
                  className="input input-bordered input-primary w-full"
                />
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-semibold">Last Name</span>
                </div>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="Doe"
                  className="input input-bordered input-primary w-full"
                />
              </label>
            </div>

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
                autoComplete="new-password"
                required
                placeholder="••••••••"
                className="input input-bordered input-primary w-full"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Confirm Password</span>
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                placeholder="••••••••"
                className="input input-bordered input-primary w-full"
              />
            </label>

            <div className="pt-4">
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
