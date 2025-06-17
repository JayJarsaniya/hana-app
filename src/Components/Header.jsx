import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/hana-logo.png";
import "../assets/css/Header.css";

const slugify = (text) =>
  text
    ?.toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-") || "";

const Header = ({ homeData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const navigate = useNavigate();

  // Search across all collections
  const performSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);
    setShowResults(true);

    try {
      // Cache keys
      const cacheKey = "search_data";
      const cacheTimestampKey = "search_timestamp";
      const cacheDuration = 1000 * 60 * 60 * 24; // 24 hours
      const now = Date.now();
      const cached = localStorage.getItem(cacheKey);
      const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

      let appsData = [],
        kbData = [],
        portfolioData = [],
        teamData = [];

      if (
        cached &&
        cachedTimestamp &&
        now - parseInt(cachedTimestamp) < cacheDuration
      ) {
        const cachedData = JSON.parse(cached);
        appsData = cachedData.apps || [];
        kbData = cachedData.kb || [];
        portfolioData = cachedData.portfolio || [];
        teamData = cachedData.team || [];
      } else {
        // API calls
        const [appsResponse, kbResponse, portfolioResponse, teamResponse] =
          await Promise.all([
            axios.post("https://crmapi.conscor.com/api/general/mfind", {
              dbName: "hanaplateformweb",
              collectionName: "appspage",
              limit: 0,
            }),
            axios.post("https://crmapi.conscor.com/api/general/mfind", {
              dbName: "hanaplateformweb",
              collectionName: "knowledgebase",
              limit: 0,
            }),
            axios
              .post("https://crmapi.conscor.com/api/general/mfind", {
                dbName: "hanaplateformweb",
                collectionName: "portfolio_page",
                limit: 0,
              })
              .catch(() => ({ data: { data: [] } })),
            axios
              .post("https://crmapi.conscor.com/api/general/mfind", {
                dbName: "hanaplateformweb",
                collectionName: "team_page",
                limit: 0,
              })
              .catch(() => ({ data: { data: [] } })),
          ]);

        appsData = appsResponse.data?.data || [];
        kbData = kbResponse.data?.data || [];
        portfolioData = portfolioResponse.data?.data || [];
        teamData = teamResponse.data?.data || [];

        // Cache data
        localStorage.setItem(
          cacheKey,
          JSON.stringify({
            apps: appsData,
            kb: kbData,
            portfolio: portfolioData,
            team: teamData,
          })
        );
        localStorage.setItem(cacheTimestampKey, now.toString());
      }

      const results = [];
      const queryLower = query.toLowerCase();

      // Search in Apps
      appsData.forEach((item) => {
        const app = item.sectionData?.hanaapps;
        if (app) {
          const apptitleMatch = app.title?.toLowerCase().includes(queryLower);
          const appsubtitleMatch = app.bannerTitle
            ?.toLowerCase()
            .includes(queryLower);
          const appbannerdisMatch = app.bannerDescription
            ?.toLowerCase()
            .includes(queryLower);
          const appdescMatch = app.description
            ?.toLowerCase()
            .includes(queryLower);
          const appcategoryMatch = app.category
            ?.toLowerCase()
            .includes(queryLower);
          const appbenefitstitleMatch = app.benefitsTitle
            ?.toLowerCase()
            .includes(queryLower);
          const appbenefitsdesMatch = app.benefitsDescription
            ?.toLowerCase()
            .includes(queryLower);
          const appbenefitsdetailHasMatch =
            app.benefitsdetails?.filter((benefit) =>
              benefit.Title1?.toLowerCase().includes(queryLower)
            ).length > 0;
          const appbenefitsdetail2HasMatch =
            app.benefitsdetails?.filter((benefit) =>
              benefit.description1?.toLowerCase().includes(queryLower)
            ).length > 0;
          const appservicedetailHasMatch =
            app.servicesdetails?.filter((benefit) =>
              benefit.Title2?.toLowerCase().includes(queryLower)
            ).length > 0;
          const appservicedetail2HasMatch =
            app.servicesdetails?.filter((benefit) =>
              benefit.description2?.toLowerCase().includes(queryLower)
            ).length > 0;
          const appwhocanusedetailHasMatch =
            app.aiDrivendetails?.filter((benefit) =>
              benefit.description4?.toLowerCase().includes(queryLower)
            ).length > 0;
          const apprevenuetitleMatch = app.revenueTitle
            ?.toLowerCase()
            .includes(queryLower);
          const apprevenuedetailsHasMatch =
            app.revenuedetails?.filter((benefit) =>
              benefit.Title6?.toLowerCase().includes(queryLower)
            ).length > 0;
          const apprevenuedetails2HasMatch =
            app.revenuedetails?.filter((benefit) =>
              benefit.description6?.toLowerCase().includes(queryLower)
            ).length > 0;

          if (
            apptitleMatch ||
            appdescMatch ||
            appcategoryMatch ||
            appsubtitleMatch ||
            appbannerdisMatch ||
            appbenefitstitleMatch ||
            appbenefitsdesMatch ||
            appbenefitsdetailHasMatch ||
            appbenefitsdetail2HasMatch ||
            appservicedetailHasMatch ||
            appservicedetail2HasMatch ||
            appwhocanusedetailHasMatch ||
            apprevenuetitleMatch ||
            apprevenuedetailsHasMatch ||
            apprevenuedetails2HasMatch
          ) {
            results.push({
              id: item._id,
              title: app.title,
              description: app.description,
              type: "App",
              category: app.category,
              slug: slugify(app.title),
              path: `/apps/${slugify(app.title)}`,
              image: app.image,
              rating: app.rating,
            });
          }
        }
      });

      // Search in Knowledge Base
      kbData.forEach((item) => {
        const kb = item.sectionData?.Knowledgebase;
        if (kb) {
          const kbtitleMatch = kb.title?.toLowerCase().includes(queryLower);
          const kbdescMatch = kb.description
            ?.toLowerCase()
            .includes(queryLower);
          const kbbannerTitleMatch = kb.bannerTitle
            ?.toLowerCase()
            .includes(queryLower);
          const kbbannerDescriptionMatch = kb.bannerDescription
            ?.toLowerCase()
            .includes(queryLower);
          const kbintroDetailsMatch = kb.IntroductionDetails?.some((detail) =>
            detail.Introduction1?.toLowerCase().includes(queryLower)
          );
          const kbsection1DetailsMatch = kb.Section1details?.some(
            (detail) =>
              detail.Section1Title?.toLowerCase().includes(queryLower) ||
              detail.Section1Description1?.toLowerCase().includes(queryLower) ||
              detail.Section1Description2?.toLowerCase().includes(queryLower) ||
              detail.Section1Description3?.toLowerCase().includes(queryLower) ||
              detail.Section1Description4?.toLowerCase().includes(queryLower) ||
              detail.Section1Description5?.toLowerCase().includes(queryLower)
          );
          const kbsection2DetailsMatch = kb.Section2details?.some(
            (detail) =>
              detail.Section2Title?.toLowerCase().includes(queryLower) ||
              detail.Section2SubTitle1?.toLowerCase().includes(queryLower) ||
              detail.Section2Description1?.toLowerCase().includes(queryLower) ||
              detail.Section2SubTitle2?.toLowerCase().includes(queryLower) ||
              detail.Section2Description2?.toLowerCase().includes(queryLower) ||
              detail.Section2SubTitle3?.toLowerCase().includes(queryLower) ||
              detail.Section2Description3?.toLowerCase().includes(queryLower) ||
              detail.Section2SubTitle4?.toLowerCase().includes(queryLower) ||
              detail.Section2Description4?.toLowerCase().includes(queryLower) ||
              detail.Section2SubTitle5?.toLowerCase().includes(queryLower) ||
              detail.Section2Description5?.toLowerCase().includes(queryLower)
          );
          const kbsection3DetailsMatch = kb.Section3details?.some(
            (detail) =>
              detail.Section3Title?.toLowerCase().includes(queryLower) ||
              detail.Section3Description?.toLowerCase().includes(queryLower)
          );
          const kbsection4DetailsMatch = kb.Section4details?.some(
            (detail) =>
              detail.Section4Title?.toLowerCase().includes(queryLower) ||
              detail.Section4SubTitle1?.toLowerCase().includes(queryLower) ||
              detail.Section4Description1?.toLowerCase().includes(queryLower) ||
              detail.Section4SubTitle2?.toLowerCase().includes(queryLower) ||
              detail.Section4Description2?.toLowerCase().includes(queryLower) ||
              detail.Section4SubTitle3?.toLowerCase().includes(queryLower) ||
              detail.Section4Description3?.toLowerCase().includes(queryLower) ||
              detail.Section4SubTitle4?.toLowerCase().includes(queryLower) ||
              detail.Section4Description4?.toLowerCase().includes(queryLower) ||
              detail.Section4SubTitle5?.toLowerCase().includes(queryLower) ||
              detail.Section4Description5?.toLowerCase().includes(queryLower)
          );
          const kbsection5DetailsMatch = kb.Section5details?.some(
            (detail) =>
              detail.Section5Title?.toLowerCase().includes(queryLower) ||
              detail.Section5Description1?.toLowerCase().includes(queryLower) ||
              detail.Section5Description2?.toLowerCase().includes(queryLower) ||
              detail.Section5Description3?.toLowerCase().includes(queryLower)
          );
          const kbsection6DetailsMatch = kb.Section6details?.some(
            (detail) =>
              detail.Section6Title?.toLowerCase().includes(queryLower) ||
              detail.Section6SubTitle1?.toLowerCase().includes(queryLower) ||
              detail.Section6Description1?.toLowerCase().includes(queryLower) ||
              detail.Section6SubTitle2?.toLowerCase().includes(queryLower) ||
              detail.Section6Description2?.toLowerCase().includes(queryLower) ||
              detail.Section6SubTitle3?.toLowerCase().includes(queryLower) ||
              detail.Section6Description3?.toLowerCase().includes(queryLower) ||
              detail.Section6SubTitle4?.toLowerCase().includes(queryLower) ||
              detail.Section6Description4?.toLowerCase().includes(queryLower) ||
              detail.Section6SubTitle5?.toLowerCase().includes(queryLower) ||
              detail.Section6Description5?.toLowerCase().includes(queryLower)
          );
          const kbconclusionDetailsMatch = kb.ConclusionDetails?.some(
            (detail) => detail.Conclusion?.toLowerCase().includes(queryLower)
          );

          if (
            kbtitleMatch ||
            kbdescMatch ||
            kbbannerTitleMatch ||
            kbbannerDescriptionMatch ||
            kbintroDetailsMatch ||
            kbsection1DetailsMatch ||
            kbsection2DetailsMatch ||
            kbsection3DetailsMatch ||
            kbsection4DetailsMatch ||
            kbsection5DetailsMatch ||
            kbsection6DetailsMatch ||
            kbconclusionDetailsMatch
          ) {
            results.push({
              id: item._id,
              title: kb.title,
              description: kb.description,
              type: "Knowledge Base",
              slug: slugify(kb.title),
              path: `/kb/${slugify(kb.title)}`,
            });
          }
        }
      });

      // Search in Portfolio
      portfolioData.forEach((item) => {
        const portfolio = item.sectionData?.portfolio;
        const portfolioPage = item.sectionData?.portfolio_page;
        if (portfolio) {
          let isMatch = false;

          // Portfolio fields
          if (portfolio.portfolioTitle?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (
            portfolio.portfolioDescription?.toLowerCase().includes(queryLower)
          )
            isMatch = true;
          if (portfolio.bannerTitle?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (portfolio.bannerDescription?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (portfolio.AboutTitle?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (portfolio.overviewTitle?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (portfolio.ProblemTitle?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (portfolio.ProblemDescription?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (portfolio.SolutionTitle?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (portfolio.SolutionDescription?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (portfolio.ResultTitle?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (
            portfolio.CountryList?.some((country) =>
              country.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;
          if (
            portfolio.IndustryList?.some((industry) =>
              industry.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;
          if (
            portfolio.SolutionList?.some((solution) =>
              solution.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;
          if (
            portfolio.serviceDetails?.some((service) =>
              service.servicesTitle?.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;
          if (
            portfolio.TechnologiesList?.some((tech) =>
              tech.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;
          if (
            portfolio.overviewDetails?.some((detail) =>
              detail.overviewDescription?.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;
          if (
            portfolio.ProblemDetails?.some(
              (detail) =>
                detail.ProblemTitle2?.toLowerCase().includes(queryLower) ||
                detail.ProblemDescription2?.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;
          if (
            portfolio.SolutionDetails?.some(
              (detail) =>
                detail.SolutionTitle2?.toLowerCase().includes(queryLower) ||
                detail.SolutionDescription2?.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;
          if (
            portfolio.ResultDetails?.some((detail) =>
              detail.ResultDescription2?.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;

          // Portfolio_page fields
          if (
            portfolioPage?.mainTitleSection?.toLowerCase().includes(queryLower)
          )
            isMatch = true;
          if (
            portfolioPage?.subContentSection?.toLowerCase().includes(queryLower)
          )
            isMatch = true;
          if (
            portfolioPage?.jobfulldetails?.some((job) =>
              job.jobdescription?.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;
          if (
            portfolioPage?.locationdatejobSection?.some((info) =>
              info.jobDetails?.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;
          if (
            portfolioPage?.textdetails?.some((detail) =>
              detail.subDetailSection1?.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;
          if (
            portfolioPage?.textdetails2?.some((detail) =>
              detail.subDetailSection2?.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;
          if (
            portfolioPage?.textdetails3?.some((detail) =>
              detail.subDetailSection3?.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;
          if (
            portfolioPage?.textdetails4?.some((detail) =>
              detail.subDetailSection4?.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;

          if (isMatch) {
            results.push({
              id: item._id,
              title: portfolio.portfolioTitle,
              description: portfolio.portfolioDescription,
              type: "Portfolio",
              slug: slugify(portfolio.portfolioTitle),
              path: `/portfolio/${slugify(portfolio.portfolioTitle)}`,
              image: portfolio.portfolioImage,
            });
          }
        }
      });

      // Search in Team
      teamData.forEach((item) => {
        const team = item.sectionData?.["Work Together Section"];
        if (team) {
          let isMatch = false;

          // Team fields
          if (team.workTogetherLeftContent?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (team.workTogetherRightTitle?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (team.workTogetherRightContent?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (team.workTogetherSubTitle?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (team.expertiseEmployeesTitle?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (team.bringingTitle?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (team.bringingContent?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (
            team.satisfiedBackgroundImageTitleOne
              ?.toLowerCase()
              .includes(queryLower)
          )
            isMatch = true;
          if (
            team.satisfiedBackgroundImageTitleTwo
              ?.toLowerCase()
              .includes(queryLower)
          )
            isMatch = true;
          if (team.futureTitle?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (team.futureContent?.toLowerCase().includes(queryLower))
            isMatch = true;
          if (
            team.BringingTable?.some(
              (member) =>
                member.bringingTableName?.toLowerCase().includes(queryLower) ||
                member.bringingTableSubTitle?.toLowerCase().includes(queryLower)
            )
          )
            isMatch = true;

          if (isMatch) {
            results.push({
              id: item._id,
              title: "Our Team",
              description:
                team.workTogetherRightContent ||
                "Meet our passionate and expert team members.",
              type: "Team",
              path: "/team",
              image: team.expertiseEmployeesImage,
            });
          }
        }
      });

      // Static pages
      const staticPages = [
        { title: "Home", path: "/", type: "Page" },
        { title: "About Us", path: "/about", type: "Page" },
        { title: "Team", path: "/team", type: "Page" },
        { title: "Apps", path: "/apps", type: "Page" },
        { title: "Knowledge Base", path: "/kb", type: "Page" },
        { title: "Portfolio", path: "/portfolio", type: "Page" },
        { title: "Privacy Policy", path: "/privacy-policy", type: "Page" },
      ];

      staticPages.forEach((page) => {
        if (page.title.toLowerCase().includes(queryLower)) {
          results.push({
            ...page,
            id: `static-${page.path}`,
            description: `Navigate to ${page.title} page`,
          });
        }
      });

      setSearchResults(results);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  // Handle result click
  const handleResultClick = (result) => {
    setShowResults(false);
    setSearchQuery("");

    if (
      result.type === "App" ||
      result.type === "Knowledge Base" ||
      result.type === "Portfolio"
    ) {
      navigate(result.path, { state: { id: result.id } });
    } else {
      navigate(result.path);
    }

    // Close modal
    const modal = document.getElementById("search-template");
    const modalInstance = window.bootstrap?.Modal?.getInstance(modal);
    if (modalInstance) {
      modalInstance.hide();
    }
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".search-container")) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle offcanvas
  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <>
      <div className={`offcanvas-3__area ${isOffcanvasOpen ? "open" : ""}`}>
        <div className="offcanvas-3__inner">
          <div className="offcanvas-3__meta-wrapper">
            <div>
              <button
                id="close_offcanvas"
                className="close-button close-offcanvas"
                onClick={toggleOffcanvas}
              >
                <span />
                <span />
              </button>
            </div>
            <div>
              <div className="offcanvas-3__meta mb-145 d-none d-md-block">
                <ul>
                  <li>
                    <a href="tel:+2-352698102" className="unnerline">
                      <u>+2-352 698 102</u>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@me.com">contact@me.com</a>
                  </li>
                  <li>
                    <a href="#">
                      27 Division St, <br />
                      New York, NY 10002, USA
                    </a>
                  </li>
                </ul>
              </div>
              <div className="offcanvas-3__social d-none d-md-block">
                <p className="title">Follow Me</p>
                <div className="offcanvas-3__social-links">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-dribbble" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-3__menu-wrapper">
            <nav className="nav-menu offcanvas-3__menu">
              <ul>
                <li>
                  <Link to="/" onClick={toggleOffcanvas}>
                    home
                  </Link>
                </li>
                <li>
                  <Link to="/apps" onClick={toggleOffcanvas}>
                    Apps
                  </Link>
                </li>
                <li>
                  <Link to="/kb" onClick={toggleOffcanvas}>
                    knowledge base
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={toggleOffcanvas}>
                    about us
                  </Link>
                </li>
                <li>
                  <Link to="/team" onClick={toggleOffcanvas}>
                    team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    rel="noopener noreferrer"
                    onClick={toggleOffcanvas}
                  >
                    portfolios
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <div
        className="modal fade"
        id="search-template"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="search-template"
        aria-hidden="true"
      >
        <button
          type="button"
          className="btn-close header-btn-close "
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={() => {
            setShowResults(false);
            setSearchQuery("");
          }}
        />
        <div className="header-modal modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="search-container">
                <form onSubmit={handleSearchSubmit} className="form-search">
                  <input
                    type="text"
                    placeholder="Search apps, knowledge base, portfolios, team..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (e.target.value.trim()) {
                        performSearch(e.target.value);
                      } else {
                        setShowResults(false);
                      }
                    }}
                    autoFocus
                    aria-label="Search"
                  />
                  <button type="submit" disabled={isSearching}>
                    {isSearching ? (
                      <i className="fa-solid fa-spinner fa-spin" />
                    ) : (
                      <i className="fa-solid fa-magnifying-glass" />
                    )}
                  </button>
                </form>

                {/* Search Results */}
                {showResults && (
                  <div className="search-results mt-3">
                    {isSearching ? (
                      <div className="text-center p-3">
                        <i className="fa-solid fa-spinner fa-spin me-2"></i>
                        Searching...
                      </div>
                    ) : (
                      <>
                        <div className="search-results-header mb-3">
                          <h6 className="mb-0">
                            {searchResults.length > 0
                              ? `Found ${searchResults.length} result${
                                  searchResults.length !== 1 ? "s" : ""
                                } for "${searchQuery}"`
                              : `No results found for "${searchQuery}"`}
                          </h6>
                        </div>

                        {searchResults.length > 0 ? (
                          <div
                            className="search-results-list"
                            style={{ maxHeight: "400px", overflowY: "auto" }}
                          >
                            {searchResults.map((result) => (
                              <div
                                key={result.id}
                                className="search-result-item p-3 border-bottom cursor-pointer hover-bg-light"
                                onClick={() => handleResultClick(result)}
                                style={{ cursor: "pointer" }}
                              >
                                <div className="d-flex align-items-start">
                                  {result.image && (
                                    <img
                                      src={result.image}
                                      alt={result.title}
                                      className="me-3 rounded"
                                      style={{
                                        width: "50px",
                                        height: "50px",
                                        objectFit: "cover",
                                      }}
                                    />
                                  )}
                                  <div className="flex-grow-1">
                                    <div className="d-flex justify-content-between align-items-start mb-1">
                                      <h6 className="mb-0 text-primary">
                                        {result.title}
                                      </h6>
                                      <small className="badge bg-secondary">
                                        {result.type}
                                      </small>
                                    </div>
                                    {result.category && (
                                      <small className="text-white d-block mb-1">
                                        Category: {result.category}
                                      </small>
                                    )}
                                    {result.rating && (
                                      <div className="mb-1">
                                        <small className="text-warning">
                                          {"★".repeat(
                                            Math.floor(result.rating)
                                          )}
                                          {"☆".repeat(
                                            5 - Math.floor(result.rating)
                                          )}
                                          <span className="text-white ms-1">
                                            ({result.rating})
                                          </span>
                                        </small>
                                      </div>
                                    )}
                                    <p
                                      className="mb-0 text-white small"
                                      style={{ fontSize: "0.85rem" }}
                                    >
                                      {result.description?.length > 100
                                        ? `${result.description.substring(
                                            0,
                                            100
                                          )}...`
                                        : result.description}
                                    </p>
                                    <small className="text-success">
                                      <i className="fa-solid fa-arrow-right me-1"></i>
                                      Click to navigate
                                    </small>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center p-4 text-white">
                            <i className="fa-solid fa-search fa-2x mb-3 d-block"></i>
                            <p className="mb-0 text-white">
                              Try searching for:
                            </p>
                            <small>
                              Apps, Knowledge Base, Portfolio, Team, or Page
                              names
                            </small>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area">
        <div className="container large">
          <div className="header-area__inner">
            <div className="header__logo">
              <Link to="/">
                <img
                  className="show-light"
                  src={logo}
                  alt="Site Logo"
                  height={50}
                />
                <img
                  className="show-dark"
                  src={logo}
                  alt="Site Logo"
                  height={50}
                />
              </Link>
            </div>
            <div className="header__nav pos-center">
              <nav className="main-menu d-none d-lg-block">
                <ul>
                  <li className="menu-item-has-children">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/apps">apps</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/kb">knowledge base</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/about">about us</Link>
                  </li>
                  <li>
                    <Link to="/team">team</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">portfolios</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="header-search"
              data-bs-toggle="modal"
              data-bs-target="#search-template"
              style={{ cursor: "pointer" }}
            >
              <img
                className="show-light"
                src="https://crowdytheme.com/html/arolax/assets/imgs/icon/search.webp"
                alt="search-icon"
              />
            </div>
            <div className="header__navicon d-xl-none">
              <button onClick={toggleOffcanvas} className="open-offcanvas">
                <i className="fa-solid fa-bars" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
