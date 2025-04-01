import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
  ChevronDown,
  Star,
  Building,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// This would normally come from a database or API based on the search parameters
const searchResults = [
  {
    id: 1,
    title: "Computer Science, MSc",
    university: "Texas A&M University",
    logo: "/placeholder.svg?height=100&width=100",
    location: "Texas, United States",
    duration: "2.5 Years",
    degree: "Master",
    programType: "Pathway",
    tuition: "13,715 $ / year",
    employabilityRank: "111-120",
    flag: "🇺🇸",
  },
  {
    id: 2,
    title: "Computer Science, MSc",
    university: "University of California, Riverside",
    logo: "/placeholder.svg?height=100&width=100",
    location: "California, United States",
    duration: "2 Years",
    degree: "Master",
    programType: "Full-time",
    tuition: "37,980 $ / year",
    employabilityRank: "91-100",
    flag: "🇺🇸",
  },
  {
    id: 3,
    title: "Computer Science, MSc",
    university: "University of Bristol",
    logo: "/placeholder.svg?height=100&width=100",
    location: "Bristol, United Kingdom",
    duration: "1 Year",
    degree: "Master",
    programType: "Full-time",
    tuition: "25,900 £ / year",
    employabilityRank: "71-80",
    flag: "🇬🇧",
  },
  {
    id: 4,
    title: "Computer Science, MSc",
    university: "University of Toronto",
    logo: "/placeholder.svg?height=100&width=100",
    location: "Toronto, Canada",
    duration: "2 Years",
    degree: "Master",
    programType: "Full-time",
    tuition: "22,640 CAD / year",
    employabilityRank: "51-60",
    flag: "🇨🇦",
  },
  {
    id: 5,
    title: "Computer Science, MSc",
    university: "University of Melbourne",
    logo: "/placeholder.svg?height=100&width=100",
    location: "Melbourne, Australia",
    duration: "2 Years",
    degree: "Master",
    programType: "Full-time",
    tuition: "46,000 AUD / year",
    employabilityRank: "41-50",
    flag: "🇦🇺",
  },
];

export default function SearchPage({ searchParams }) {
  // Get search parameters from URL
  const course =
    typeof searchParams.course === "string"
      ? searchParams.course
      : "Computer Science";
  const destination =
    typeof searchParams.destination === "string"
      ? searchParams.destination
      : "United States";
  const degree =
    typeof searchParams.degree === "string" ? searchParams.degree : "Master";

  // Count results
  const courseCount = searchResults.length;
  const universityCount = new Set(searchResults.map((r) => r.university)).size;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header with logo and search */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center">
            {/* <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-blue-600 flex items-center">
                <span className="text-3xl mr-1">S</span>
                <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
                  STUDY
                  <br />
                  ABROAD
                  <br />
                  GLOBAL
                </span>
              </div>
            </Link> */}

            <div className="flex-1 max-w-3xl mx-4">
              <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 px-3 py-2">
                <Input
                  defaultValue={course}
                  placeholder="Course name"
                  className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                />
                <div className="h-5 w-px bg-gray-300 mx-2"></div>
                <Input
                  defaultValue={destination}
                  placeholder="Country"
                  className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                />
                <div className="h-5 w-px bg-gray-300 mx-2"></div>
                <Input
                  defaultValue={degree}
                  placeholder="Degree"
                  className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                />
                <Button
                  size="sm"
                  className="ml-2 bg-blue-600 hover:bg-blue-700"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <Button variant="ghost">
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Menu
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Filters bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            <div className="flex items-center text-blue-600">
              <Filter className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">All Filters (2)</span>
            </div>

            <Badge
              variant="outline"
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border-blue-100"
            >
              <span>{degree}</span>
              <X className="h-3 w-3 cursor-pointer" />
            </Badge>

            <Badge
              variant="outline"
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border-blue-100"
            >
              <span>{destination}</span>
              <X className="h-3 w-3 cursor-pointer" />
            </Badge>

            <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
              <Building className="h-4 w-4 mr-1 text-gray-400" />
              <span className="text-sm">University</span>
              <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
            </div>

            <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
              <BookOpen className="h-4 w-4 mr-1 text-gray-400" />
              <span className="text-sm">Program</span>
              <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
            </div>

            <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
              <svg
                className="h-4 w-4 mr-1 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-sm">Fees</span>
              <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
            </div>

            <div className="flex items-center border border-gray-200 rounded-full px-3 py-1">
              <svg
                className="h-4 w-4 mr-1 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-sm">Bursary</span>
              <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <Tabs defaultValue="courses" className="mb-8">
          <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-white p-1 text-gray-500 border border-gray-200">
            <TabsTrigger
              value="courses"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
            >
              Courses <Badge className="ml-2 bg-blue-500">{courseCount}</Badge>
            </TabsTrigger>
            <TabsTrigger
              value="universities"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm"
            >
              Universities{" "}
              <Badge className="ml-2 bg-blue-500">{universityCount}</Badge>
            </TabsTrigger>
          </TabsList>

          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-medium text-gray-900">1-{courseCount}</span>{" "}
              over{" "}
              <span className="font-medium text-gray-900">{courseCount}</span>{" "}
              results for{" "}
              <span className="font-medium text-amber-500">"{course}"</span>
            </p>

            <div className="flex items-center">
              <span className="text-sm mr-2">Sort by:</span>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[180px] h-9 text-sm">
                  <SelectValue placeholder="Relevance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="tuition-low">
                    Tuition: Low to High
                  </SelectItem>
                  <SelectItem value="tuition-high">
                    Tuition: High to Low
                  </SelectItem>
                  <SelectItem value="ranking">University Ranking</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="courses" className="mt-0">
            <div className="space-y-6">
              {searchResults.map((result) => (
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
                            <div className="text-xs text-gray-500 mb-1">
                              University
                            </div>
                            <div className="text-sm font-medium">
                              {result.university}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 mb-1">
                              Duration
                            </div>
                            <div className="text-sm font-medium">
                              {result.duration}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 mb-1">
                              Degree
                            </div>
                            <div className="text-sm font-medium">
                              {result.degree}
                            </div>
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
                            Graduate employability rank of{" "}
                            {result.employabilityRank}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="universities" className="mt-0">
            <div className="bg-white rounded-lg p-8 text-center">
              <GraduationCap className="h-12 w-12 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium mb-2">University View</h3>
              <p className="text-gray-500 mb-4">
                View universities offering Computer Science programs
              </p>
              <Button>View Universities</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
