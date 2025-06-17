import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/allapss.scss";
import axios from "axios";
import Preloader from "../Components/Preloader";
import Cta from "../Components/Cta";
import Footer from "../Components/Footer";
import image1 from "../assets/Group-1000014019.png";

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedSolutions, setSelectedSolutions] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);
  const [industryOptions, setIndustryOptions] = useState([]);
  const [solutionOptions, setSolutionOptions] = useState([]);
  const [technologyOptions, setTechnologyOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);

  // Search states for each filter group
  const [searchIndustry, setSearchIndustry] = useState("");
  const [searchSolution, setSearchSolution] = useState("");
  const [searchTechnology, setSearchTechnology] = useState("");
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    const cacheKey = "portfolio_page_data";
    const cacheTimestampKey = "portfolio_page_timestamp";
    const cacheDuration = 1000 * 60 * 60 * 24; // 24 hours

    const now = Date.now();
    const cached = localStorage.getItem(cacheKey);
    const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

    if (cached && cachedTimestamp && now - cachedTimestamp < cacheDuration) {
      const parsedData = JSON.parse(cached);
      setPortfolioData(parsedData);
      setFilteredData(parsedData);
      setLoading(false);

      const industries = new Set();
      const solutions = new Set();
      const technologies = new Set();
      const countries = new Set();

      parsedData.forEach((item) => {
        item.IndustryList?.forEach((industry) => industries.add(industry));
        item.SolutionList?.forEach((solution) => solutions.add(solution));
        item.TechnologiesList?.forEach((tech) => technologies.add(tech));
        item.CountryList?.forEach((country) => countries.add(country));
      });

      setIndustryOptions([...industries].sort());
      setSolutionOptions([...solutions].sort());
      setTechnologyOptions([...technologies].sort());
      setCountryOptions([...countries].sort());
    } else {
      const fetchPortfolioData = async () => {
        try {
          const response = await axios.post(
            "https://crmapi.conscor.com/api/general/mfind",
            {
              dbName: "hanaplateformweb",
              collectionName: "portfolio_page",
              limit: 0,
            }
          );

          if (response.data?.success && response.data?.data?.length > 0) {
            const data = response.data.data.map((item) => ({
              ...item.sectionData.portfolio,
              _id: item._id,
              IndustryList:
                item.sectionData.portfolio.IndustryList?.map((industry) =>
                  industry === "Artificial Inelligence"
                    ? "Artificial Intelligence"
                    : industry
                ) || [],
            }));

            const portfolioArray = Array.isArray(data) ? data : [data];
            setPortfolioData(portfolioArray);
            setFilteredData(portfolioArray);

            localStorage.setItem(cacheKey, JSON.stringify(portfolioArray));
            localStorage.setItem(cacheTimestampKey, now);

            const industries = new Set();
            const solutions = new Set();
            const technologies = new Set();
            const countries = new Set();

            portfolioArray.forEach((item) => {
              item.IndustryList?.forEach((industry) =>
                industries.add(industry)
              );
              item.SolutionList?.forEach((solution) => solutions.add(solution));
              item.TechnologiesList?.forEach((tech) => technologies.add(tech));
              item.CountryList?.forEach((country) => countries.add(country));
            });

            setIndustryOptions([...industries].sort());
            setSolutionOptions([...solutions].sort());
            setTechnologyOptions([...technologies].sort());
            setCountryOptions([...countries].sort());
          } else {
            setError("No portfolio data found.");
          }
        } catch (error) {
          console.error("Error fetching portfolio data:", error);
          setError("Failed to fetch portfolio data. Please try again later.");
          setPortfolioData([]);
          setFilteredData([]);
        } finally {
          setLoading(false);
        }
      };

      fetchPortfolioData();
    }
  }, []);

  useEffect(() => {
    if (!portfolioData || !Array.isArray(portfolioData)) return;

    const filtered = portfolioData.filter((item) => {
      const matchesIndustry =
        selectedIndustries.length === 0 ||
        item.IndustryList?.some((industry) =>
          selectedIndustries.includes(industry)
        );
      const matchesSolution =
        selectedSolutions.length === 0 ||
        item.SolutionList?.some((solution) =>
          selectedSolutions.includes(solution)
        );
      const matchesTechnology =
        selectedTechnologies.length === 0 ||
        item.TechnologiesList?.some((tech) =>
          selectedTechnologies.includes(tech)
        );
      const matchesCountry =
        selectedCountries.length === 0 ||
        item.CountryList?.some((country) =>
          selectedCountries.includes(country)
        );

      return (
        matchesIndustry &&
        matchesSolution &&
        matchesTechnology &&
        matchesCountry
      );
    });

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [
    selectedIndustries,
    selectedSolutions,
    selectedTechnologies,
    selectedCountries,
    portfolioData,
  ]);

  const handleCheckboxChange = (value, setFunction, currentValues) => {
    if (currentValues.includes(value)) {
      setFunction(currentValues.filter((item) => item !== value));
    } else {
      setFunction([...currentValues, value]);
    }
  };

  const clearFilters = () => {
    setSelectedIndustries([]);
    setSelectedSolutions([]);
    setSelectedTechnologies([]);
    setSelectedCountries([]);
    setActiveFilter(null);
    // Clear search inputs
    setSearchIndustry("");
    setSearchSolution("");
    setSearchTechnology("");
    setSearchCountry("");
  };

  const toggleFilter = (filterName) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  const removeFilter = (filter) => {
    if (selectedIndustries.includes(filter)) {
      setSelectedIndustries(
        selectedIndustries.filter((item) => item !== filter)
      );
    } else if (selectedSolutions.includes(filter)) {
      setSelectedSolutions(selectedSolutions.filter((item) => item !== filter));
    } else if (selectedTechnologies.includes(filter)) {
      setSelectedTechnologies(
        selectedTechnologies.filter((item) => item !== filter)
      );
    } else if (selectedCountries.includes(filter)) {
      setSelectedCountries(selectedCountries.filter((item) => item !== filter));
    }
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const allSelectedFilters = [
    ...selectedIndustries,
    ...selectedSolutions,
    ...selectedTechnologies,
    ...selectedCountries,
  ];

  // Filter options based on search queries
  const filteredIndustryOptions = industryOptions.filter((industry) =>
    industry.toLowerCase().includes(searchIndustry.toLowerCase())
  );
  const filteredSolutionOptions = solutionOptions.filter((solution) =>
    solution.toLowerCase().includes(searchSolution.toLowerCase())
  );
  const filteredTechnologyOptions = technologyOptions.filter((tech) =>
    tech.toLowerCase().includes(searchTechnology.toLowerCase())
  );
  const filteredCountryOptions = countryOptions.filter((country) =>
    country.toLowerCase().includes(searchCountry.toLowerCase())
  );

  return (
    <>
      {loading && <Preloader />}
      {error && <div className="error-message">{error}</div>}

      <div className="font-heading-beatricetrial-regular-2">
        <div id="has_smooth" />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="body-wrapper body-corporate-agency">
              <div className="overlay-switcher-close" />
              <main className="portfolio-main-sec">
                <section className="works-area apps-work-area">
                  <div className="container">
                    <div className="works-area-inner section-spacing-bottom">
                      <div className="section-header wow animate__animated animate__fadeInDown">
                        <div className="section-title-wrapper">
                          <div className="title-wrapper">
                            <h2 className="section-title apps-section-title has_text_move_anim">
                              Portfolio
                            </h2>
                          </div>
                          <div className="text-wrapper">
                            <p className="text has_fade_anim">
                              We create amazing mobile & desktop Apps. Most of
                              our apps are available on Windows, Linux, Mac,
                              iPhone, iPad, and Android.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="filter-section mt-5">
                        <div className="filter-buttons">
                          <button
                            onClick={() => toggleFilter("industries")}
                            className={
                              activeFilter === "industries" ? "active" : ""
                            }
                          >
                            Industries
                          </button>
                          <button
                            onClick={() => toggleFilter("solutions")}
                            className={
                              activeFilter === "solutions" ? "active" : ""
                            }
                          >
                            Solutions
                          </button>
                          <button
                            onClick={() => toggleFilter("technologies")}
                            className={
                              activeFilter === "technologies" ? "active" : ""
                            }
                          >
                            Technologies
                          </button>
                          <button
                            onClick={() => toggleFilter("countries")}
                            className={
                              activeFilter === "countries" ? "active" : ""
                            }
                          >
                            Countries
                          </button>
                          <button
                            onClick={clearFilters}
                            className="clear-filters"
                          >
                            View All
                          </button>
                        </div>

                        {(allSelectedFilters.length > 0 ||
                          filteredData.length !== portfolioData.length) && (
                          <div className="results-summary">
                            <span className="results-count">
                              {filteredData.length} results for:
                            </span>
                            {allSelectedFilters.map((filter, index) => (
                              <span key={index} className="filter-tag">
                                {filter}
                                <button
                                  className="remove-filter"
                                  onClick={() => removeFilter(filter)}
                                  aria-label={`Remove ${filter} filter`}
                                >
                                  ×
                                </button>
                              </span>
                            ))}
                            <button
                              onClick={clearFilters}
                              className="clear-all"
                            >
                              Clear All
                            </button>
                          </div>
                        )}

                        <div className="filter-options">
                          {activeFilter === "industries" && (
                            <div className="filter-group">
                              <div className="search-container">
                                <h4>Industries</h4>
                                <input
                                  type="text"
                                  placeholder="Search industries..."
                                  value={searchIndustry}
                                  onChange={(e) =>
                                    setSearchIndustry(e.target.value)
                                  }
                                  className="search-input"
                                />
                              </div>
                              <div className="filter-group-main">
                                {filteredIndustryOptions.length > 0 ? (
                                  filteredIndustryOptions.map(
                                    (industry, index) => (
                                      <div
                                        key={index}
                                        className="checkbox-item"
                                      >
                                        <input
                                          type="checkbox"
                                          id={`industry-${index}`}
                                          value={industry}
                                          checked={selectedIndustries.includes(
                                            industry
                                          )}
                                          onChange={() =>
                                            handleCheckboxChange(
                                              industry,
                                              setSelectedIndustries,
                                              selectedIndustries
                                            )
                                          }
                                          aria-label={`Filter by ${industry}`}
                                        />
                                        <label htmlFor={`industry-${index}`}>
                                          {industry}
                                        </label>
                                      </div>
                                    )
                                  )
                                ) : (
                                  <p>No industries match your search.</p>
                                )}
                              </div>
                            </div>
                          )}

                          {activeFilter === "solutions" && (
                            <div className="filter-group">
                              <div className="search-container">
                                <h4>Solutions</h4>
                                <input
                                  type="text"
                                  placeholder="Search solutions..."
                                  value={searchSolution}
                                  onChange={(e) =>
                                    setSearchSolution(e.target.value)
                                  }
                                  className="search-input"
                                />
                              </div>
                              <div className="filter-group-main">
                                {filteredSolutionOptions.length > 0 ? (
                                  filteredSolutionOptions.map(
                                    (solution, index) => (
                                      <div
                                        key={index}
                                        className="checkbox-item"
                                      >
                                        <input
                                          type="checkbox"
                                          id={`solution-${index}`}
                                          value={solution}
                                          checked={selectedSolutions.includes(
                                            solution
                                          )}
                                          onChange={() =>
                                            handleCheckboxChange(
                                              solution,
                                              setSelectedSolutions,
                                              selectedSolutions
                                            )
                                          }
                                          aria-label={`Filter by ${solution}`}
                                        />
                                        <label htmlFor={`solution-${index}`}>
                                          {solution}
                                        </label>
                                      </div>
                                    )
                                  )
                                ) : (
                                  <p>No solutions match your search.</p>
                                )}
                              </div>
                            </div>
                          )}

                          {activeFilter === "technologies" && (
                            <div className="filter-group">
                              <div className="search-container">
                                <h4>Technologies</h4>
                                <input
                                  type="text"
                                  placeholder="Search technologies..."
                                  value={searchTechnology}
                                  onChange={(e) =>
                                    setSearchTechnology(e.target.value)
                                  }
                                  className="search-input"
                                />
                              </div>
                              <div className="filter-group-main">
                                {filteredTechnologyOptions.length > 0 ? (
                                  filteredTechnologyOptions.map(
                                    (tech, index) => (
                                      <div
                                        key={index}
                                        className="checkbox-item"
                                      >
                                        <input
                                          type="checkbox"
                                          id={`tech-${index}`}
                                          value={tech}
                                          checked={selectedTechnologies.includes(
                                            tech
                                          )}
                                          onChange={() =>
                                            handleCheckboxChange(
                                              tech,
                                              setSelectedTechnologies,
                                              selectedTechnologies
                                            )
                                          }
                                          aria-label={`Filter by ${tech}`}
                                        />
                                        <label htmlFor={`tech-${index}`}>
                                          {tech}
                                        </label>
                                      </div>
                                    )
                                  )
                                ) : (
                                  <p>No technologies match your search.</p>
                                )}
                              </div>
                            </div>
                          )}

                          {activeFilter === "countries" && (
                            <div className="filter-group">
                              <div className="search-container">
                                <h4>Countries</h4>
                                <input
                                  type="text"
                                  placeholder="Search countries..."
                                  value={searchCountry}
                                  onChange={(e) =>
                                    setSearchCountry(e.target.value)
                                  }
                                  className="search-input"
                                />
                              </div>
                              <div className="filter-group-main">
                                {filteredCountryOptions.length > 0 ? (
                                  filteredCountryOptions.map(
                                    (country, index) => (
                                      <div
                                        key={index}
                                        className="checkbox-item"
                                      >
                                        <input
                                          type="checkbox"
                                          id={`country-${index}`}
                                          value={country}
                                          checked={selectedCountries.includes(
                                            country
                                          )}
                                          onChange={() =>
                                            handleCheckboxChange(
                                              country,
                                              setSelectedCountries,
                                              selectedCountries
                                            )
                                          }
                                          aria-label={`Filter by ${country}`}
                                        />
                                        <label htmlFor={`country-${index}`}>
                                          {country}
                                        </label>
                                      </div>
                                    )
                                  )
                                ) : (
                                  <p>No countries match your search.</p>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="works-wrapper-box">
                        <div className="works-wrapper">
                          <div className="category-section">
                            <div className="works-wrapper2">
                              {paginatedData.length > 0 ? (
                                paginatedData.map((item, index) => {
                                  const title =
                                    item?.portfolioTitle || "Untitled";
                                  const slug = slugify(title);
                                  const id = item?._id;

                                  return (
                                    <div
                                      key={index}
                                      className="has_fade_anim wow animate__animated animate__fadeInLeft"
                                      data-wow-iteration="1"
                                      style={{ animationDuration: "0.6s" }}
                                    >
                                      <Link
                                        to={`/portfolio/${slug}`}
                                        state={{ id }}
                                      >
                                        <div className="work-box hover-animate m-sm-0 m-4">
                                          <div className="thumb">
                                            <img
                                              src={
                                                item?.portfolioImage || image1
                                              }
                                              alt={title}
                                              loading="lazy"
                                            />
                                          </div>
                                          <div className="content">
                                            <h2 className="title">{title}</h2>
                                          </div>
                                          <div className="meta">
                                            <p className="tag text">
                                              {item?.portfolioDescription ||
                                                "No description"}
                                            </p>
                                          </div>
                                          <p className="tech-stack">
                                            {item?.TechnologiesList?.length >
                                            0 ? (
                                              item.TechnologiesList.map(
                                                (tech, idx) => (
                                                  <span key={idx}>{tech}</span>
                                                )
                                              )
                                            ) : (
                                              <span>
                                                No technologies listed
                                              </span>
                                            )}
                                          </p>
                                        </div>
                                      </Link>
                                    </div>
                                  );
                                })
                              ) : (
                                <p>
                                  No portfolio items match the selected filters.
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {totalPages > 1 && (
                        <div className="pagination">
                          <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                          >
                            Previous
                          </button>
                          <span>
                            Page {currentPage} of {totalPages}
                          </span>
                          <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                          >
                            Next
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
                <Cta />
                <Footer />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
