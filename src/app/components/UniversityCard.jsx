import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Adjust import path to your project

const ITEMS_PER_PAGE = 10;

export default function UniversityList({ searchResults }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedResults = searchResults.slice(startIndex, endIndex);

  return (
    <div className="space-y-6">
      {paginatedResults.map((result) => (
        <div
          key={result.id}
          className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="p-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-16 md:h-16 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={result.logo || "/placeholder.svg"}
                    alt={result.university}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                      {result.title}
                    </h2>
                    <div className="flex items-center mb-2">
                      <span className="mr-1">{result.flag}</span>
                      <span className="text-gray-600">
                        {result.university}, {result.location}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 md:mt-0 text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      {result.tuition}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">University</div>
                    <div className="text-sm font-medium">
                      {result.university}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Duration</div>
                    <div className="text-sm font-medium">{result.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Degree</div>
                    <div className="text-sm font-medium">{result.degree}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      Program type
                    </div>
                    <div className="text-sm font-medium">
                      {result.programType}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center">
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 text-amber-600 bg-amber-50 border-amber-100"
                  >
                    <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                    Graduate employability rank of {result.employabilityRank}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="px-4 py-2 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
