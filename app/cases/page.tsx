"use client";

import { useState } from 'react';
import { caseStudies } from '@/lib/data';
import { CaseCard } from '@/components/cases/case-card';
import { CaseFilter } from '@/components/cases/case-filter';

export default function Cases() {
  const [filteredCases, setFilteredCases] = useState(caseStudies);

  const handleFilterChange = (filters: { industry: string; channel: string }) => {
    let filtered = caseStudies;

    if (filters.industry) {
      filtered = filtered.filter(caseStudy => caseStudy.industry === filters.industry);
    }

    if (filters.channel) {
      filtered = filtered.filter(caseStudy => caseStudy.channel === filters.channel);
    }

    setFilteredCases(filtered);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Case Studies
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
          Real results from real clients. See how we've helped businesses across industries 
          achieve remarkable growth through strategic digital marketing.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">240%</div>
          <div className="text-slate-600 dark:text-slate-400">Average Revenue Growth</div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">4.2x</div>
          <div className="text-slate-600 dark:text-slate-400">Average ROAS</div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">180%</div>
          <div className="text-slate-600 dark:text-slate-400">Lead Generation Increase</div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">50+</div>
          <div className="text-slate-600 dark:text-slate-400">Successful Projects</div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <CaseFilter onFilterChange={handleFilterChange} />
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredCases.map((caseStudy) => (
          <CaseCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>

      {/* Empty State */}
      {filteredCases.length === 0 && (
        <div className="text-center py-16">
          <div className="text-slate-400 mb-4">No case studies match your current filters.</div>
          <button
            onClick={() => setFilteredCases(caseStudies)}
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            Clear filters to see all case studies
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready for Similar Results?</h2>
        <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
          These are just a few examples of what's possible. Let's discuss how we can 
          create a success story for your business too.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
        >
          Get Your Free Audit
        </a>
      </div>
    </div>
  );
}