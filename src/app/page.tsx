import Link from 'next/link';
import { DollarSign, CarFront, TrendingUp, Home as HomeIcon, ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-sky-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100/20 to-sky-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl text-slate-600 mb-4">Swyft Calculators</h1>
          <p className="text-lg text-slate-500">Professional financial calculation tools</p>
        </div>

        {/* Company Logo */}
        <div className="absolute top-6 right-6">
          <Image
            src="/images/SF_logo_white.png"
            alt="Swyft Logo"
            width={80}
            height={32}
            className="opacity-60"
          />
        </div>

        {/* Calculator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Loan Calculator Card */}
          <Link href="/loan-calculator">
            <Card className="bg-slate-800/80 backdrop-blur-xl border-slate-700/50 shadow-2xl text-white rounded-3xl hover:scale-105 transition-transform duration-300 cursor-pointer relative">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6 mx-auto">
                  <CarFront className="h-8 w-8 text-blue-400" />
                </div>
                <h2 className="text-2xl font-semibold text-center text-white mb-6">Leasing Calculator</h2>
                <ExternalLink className="h-5 w-5 text-slate-400 absolute bottom-6 right-6" />
              </CardContent>
            </Card>
          </Link>

          {/* Tax Calculator Card */}
          <Link href="/tax-calculator">
            <Card className="bg-slate-800/80 backdrop-blur-xl border-slate-700/50 shadow-2xl text-white rounded-3xl hover:scale-105 transition-transform duration-300 cursor-pointer relative">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6 mx-auto">
                  <DollarSign className="h-8 w-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-semibold text-center text-white mb-6">Income Tax Calculator</h2>
                <ExternalLink className="h-5 w-5 text-slate-400 absolute bottom-6 right-6" />
              </CardContent>
            </Card>
          </Link>

          {/* Income Annualisation Calculator Card */}
          <Link href="/income-annualisation">
            <Card className="bg-slate-800/80 backdrop-blur-xl border-slate-700/50 shadow-2xl text-white rounded-3xl hover:scale-105 transition-transform duration-300 cursor-pointer relative">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-6 mx-auto">
                  <TrendingUp className="h-8 w-8 text-purple-400" />
                </div>
                <h2 className="text-2xl font-semibold text-center text-white mb-6">Income Annualisation</h2>
                <ExternalLink className="h-5 w-5 text-slate-400 absolute bottom-6 right-6" />
              </CardContent>
            </Card>
          </Link>

          {/* Mortgage Calculator Card */}
          <Link href="/mortgage-calculator">
            <Card className="bg-slate-800/80 backdrop-blur-xl border-slate-700/50 shadow-2xl text-white rounded-3xl hover:scale-105 transition-transform duration-300 cursor-pointer relative">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-6 mx-auto">
                  <HomeIcon className="h-8 w-8 text-orange-400" />
                </div>
                <h2 className="text-2xl font-semibold text-center text-white mb-6">Mortgage Calculator</h2>
                <ExternalLink className="h-5 w-5 text-slate-400 absolute bottom-6 right-6" />
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
    
        </div>
      </div>
    </div>
  );
}
