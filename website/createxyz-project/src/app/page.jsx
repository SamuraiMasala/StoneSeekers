"use client";
import React from "react";

function MainComponent() {
  const [activeTab, setActiveTab] = React.useState("Home");

  const tabs = [
    { id: "Home", label: "Home" },
    { id: "design-brief", label: "The Design Brief" },
    { id: "experience", label: "The Experience" },
    { id: "about", label: "About" },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Sophisticated Marble Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-stone-50 to-gray-100"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/40 via-transparent to-purple-50/40"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-violet-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-radial from-cyan-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-emerald-50/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-slate-900 via-transparent to-slate-900 mix-blend-multiply"></div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-4 tracking-tight">
            Stone Seekers
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light">
            An <span className="text-violet-700 font-medium">enchanting</span>{" "}
            digital experience for museums
          </p>
          <div className="inline-flex items-center gap-4 text-sm text-gray-500 font-medium">
            <span>Academic Project</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>Digital Heritage</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>Interactive Design</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-10 bg-white/60 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? "text-violet-700 border-violet-700"
                    : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Home Tab */}
        {activeTab === "Home" && (
          <div className="space-y-24">
            {/* Hero Section */}
            <section className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                Transforming Museum Experiences Through{" "}
                <span className="text-violet-700">Smart</span> Technology
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Stone Seekers bridges the gap between ancient artifacts and
                modern discovery through
                <span className="text-cyan-700 font-medium">
                  {" "}
                  luminous
                </span>{" "}
                interactive technology, creating an{" "}
                <span className="text-emerald-700 font-medium">
                  enchanting
                </span>{" "}
                journey that sparks a{" "}
                <span className="text-rose-700 font-medium">
                  sense of wonder
                </span>{" "}
                in every visitor.
              </p>
            </section>

            {/* Features Grid */}
            <section>
              <h3 className="text-3xl font-light text-gray-900 text-center mb-16">
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200/50 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-violet-200 rounded-lg flex items-center justify-center mb-6">
                    <i className="fas fa-gem text-violet-700 text-xl"></i>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">
                    Interactive Exploration
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Discover artifacts through immersive digital interfaces
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200/50 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg flex items-center justify-center mb-6">
                    <i className="fas fa-route text-cyan-700 text-xl"></i>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">
                    Discovery Pathways
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Guided journeys through geological and cultural history
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200/50 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center mb-6">
                    <i className="fas fa-users text-emerald-700 text-xl"></i>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">
                    Collaborative Learning
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Shared experiences that connect visitors and knowledge
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200/50 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-rose-200 rounded-lg flex items-center justify-center mb-6">
                    <i className="fas fa-mobile-alt text-rose-700 text-xl"></i>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">
                    Multi-Platform Access
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Seamless experience across all devices and platforms
                  </p>
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section>
              <h3 className="text-3xl font-light text-gray-900 text-center mb-16">
                Design Process
              </h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-violet-50 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-8 border border-violet-200">
                    <i className="fas fa-search text-2xl text-violet-700"></i>
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-4">
                    Research
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Extensive user research and museum visitor behavior analysis
                    to understand engagement patterns and create{" "}
                    <span className="text-violet-700">wonder</span>.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-8 border border-cyan-200">
                    <i className="fas fa-pencil-ruler text-2xl text-cyan-700"></i>
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-4">
                    Design
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Iterative design process focusing on{" "}
                    <span className="text-cyan-700">luminous</span> interfaces
                    and <span className="text-emerald-700">enchanting</span>{" "}
                    user experiences.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-200">
                    <i className="fas fa-cogs text-2xl text-emerald-700"></i>
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-4">
                    Implementation
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="text-emerald-700">Smart</span> prototype
                    development and testing with real museum environments and
                    visitor feedback.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Design Brief Tab */}
        {activeTab === "design-brief" && (
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-light text-gray-900 mb-8">
                The Design Brief
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-10 border border-gray-200/50">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">
                  Challenge
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Museums face the challenge of engaging modern visitors who
                  expect{" "}
                  <span className="text-cyan-700 font-medium">luminous</span>{" "}
                  and immersive experiences.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Traditional display methods often fail to capture the full
                  story behind geological and archaeological artifacts, leaving
                  visitors with limited{" "}
                  <span className="text-violet-700 font-medium">
                    sense of wonder
                  </span>{" "}
                  about their historical significance.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-10 border border-gray-200/50">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">
                  Objective
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Design an{" "}
                  <span className="text-emerald-700 font-medium">
                    enchanting
                  </span>{" "}
                  digital experience that transforms passive museum visits into
                  active exploration journeys, allowing visitors to discover the
                  stories behind stone artifacts through{" "}
                  <span className="text-cyan-700 font-medium">smart</span>{" "}
                  engaging technology.
                </p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-10 border border-gray-200/50">
              <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
                Target Audience
              </h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">
                    Primary Users
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                      Museum visitors aged 12-65
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Students and educators
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      History and archaeology enthusiasts
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">
                    Secondary Users
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                      Museum staff and curators
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      Researchers and academics
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                      Digital heritage professionals
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-light text-gray-900 mb-8">
                The Experience
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-10 border border-gray-200/50">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                Interactive Journey
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Stone Seekers transforms museum visits into{" "}
                <span className="text-violet-700 font-medium">enchanting</span>{" "}
                archaeological expeditions. Visitors use{" "}
                <span className="text-cyan-700 font-medium">luminous</span>{" "}
                interactive touchscreens and mobile devices to uncover the
                hidden stories of stone artifacts through guided exploration
                that sparks a{" "}
                <span className="text-emerald-700 font-medium">
                  sense of wonder
                </span>
                .
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-lg border border-cyan-200">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">
                    Discovery Mode
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Visitors scan QR codes on artifacts to unlock detailed
                    information, 3D models, and historical context through{" "}
                    <span className="text-cyan-700 font-medium">smart</span>{" "}
                    augmented reality overlays.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-lg border border-emerald-200">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">
                    Exploration Paths
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Multiple themed pathways guide visitors through different
                    aspects of stone artifacts - from geological formation to
                    cultural significance.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-camera text-cyan-700 text-xl"></i>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">
                  AR Visualization
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="text-cyan-700">Luminous</span> augmented
                  reality brings artifacts to life with 3D reconstructions and
                  historical contexts.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-violet-200 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-route text-violet-700 text-xl"></i>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">
                  Guided Tours
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="text-violet-700">Smart</span> self-guided
                  digital tours with personalized recommendations based on
                  interests.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-share-alt text-emerald-700 text-xl"></i>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">
                  Social Sharing
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Share discoveries and create personal collections to extend
                  the <span className="text-emerald-700">enchanting</span>{" "}
                  experience beyond the visit.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* About Tab */}
        {activeTab === "about" && (
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-light text-gray-900 mb-8">
                About the Project
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-10 border border-gray-200/50">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                Academic Context
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Stone Seekers was developed as part of an advanced interaction
                design course, focusing on the intersection of digital
                technology and cultural heritage. The project explores how{" "}
                <span className="text-emerald-700 font-medium">smart</span>{" "}
                interactive design can enhance educational experiences and
                create a{" "}
                <span className="text-cyan-700 font-medium">
                  sense of wonder
                </span>{" "}
                in museum settings.
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">
                    Research Methods
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Ethnographic studies in museum environments
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      User interviews with visitors and staff
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                      Competitive analysis of existing digital museum tools
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                      Prototype testing and iteration
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">
                    Technologies Used
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      React Native for mobile applications
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                      AR.js for augmented reality features
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Node.js backend with MongoDB
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      WebGL for 3D visualizations
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-10 border border-gray-200/50">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                Impact & Future Work
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                The project successfully demonstrated increased visitor
                engagement and learning outcomes through user testing at partner
                museums. Future iterations will explore AI-powered
                personalization and expanded AR capabilities to create even more{" "}
                <span className="text-violet-700 font-medium">enchanting</span>{" "}
                experiences.
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">
                    Achievements
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                      40% increase in average visit duration
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      85% positive user feedback rating
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Featured at Digital Heritage Conference 2024
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">
                    Next Steps
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      Integration with museum collection databases
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                      Multi-language support
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      Accessibility improvements
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white/60 backdrop-blur-sm border-t border-gray-200/50 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>Stone Seekers</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>Academic Project</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>Interactive Museum Experience Design</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;