import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Target, Rocket, Lightbulb, TrendingUp, HeartHandshake, Volume2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const teamMembers = [
    { name: "Dipanjan Ray", role: "Assistant Professor", affiliation: "Ashoka University", detail: "Contact: dipanjan.ray@ashoka.edu.in" },
    { name: "Sandip", role: "Collaborator", affiliation: "", detail: "" },
    { name: "Roshni Patra", role: "3rd year Student", affiliation: "Ashoka University", detail: "" },
    { name: "Aarushi Verma", role: "3rd year Student", affiliation: "Ashoka University", detail: "" },
    { name: "Aryan Tiwari", role: "4th year Student", affiliation: "Ashoka University", detail: "" },
    { name: "Irene Philip", role: "3rd year Student", affiliation: "Ashoka University", detail: "" },
    { name: "Krutika Srivastava", role: "3rd year Student", affiliation: "Ashoka University", detail: "" },
    { name: "Reva Sawant", role: "3rd year Student", affiliation: "Ashoka University", detail: "" },
    { name: "Royina", role: "3rd year Student", affiliation: "Ashoka University", detail: "" },
    { name: "Saransh Goel", role: "4th year Student", affiliation: "Ashoka University", detail: "" },
    { name: "Saumya Mishra", role: "4th year Student", affiliation: "Ashoka University", detail: "" },
    { name: "Sia Sarin", role: "3rd year Student", affiliation: "Ashoka University", detail: "" },
    { name: "Vini Desai", role: "4th year Student", affiliation: "Ashoka University", detail: "" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 border-primary-foreground/50">
            About The Project
          </Badge>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl leading-tight" tabIndex={-1}>
            NewroView
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-primary-foreground/90 font-medium leading-relaxed">
            A Digital Platform for Tactile and Multisensory Neuroscience Resources for the Visually Challenged
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 space-y-16">
        
        {/* 1. The Need */}
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] items-start">
          <div className="sticky top-24">
            <div className="flex items-center gap-3 text-primary mb-4">
              <Target className="h-8 w-8" aria-hidden="true" />
              <h2 className="text-3xl font-bold">The Need</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Inclusive Education in Neuroscience
            </p>
          </div>
          <div className="card-modern rounded-xl p-8 space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              Despite the increase in awareness about accessibility in education, the teaching modalities in neuroscience remain largely focused on visual cues, creating a learning barrier for visually challenged students. From cortical maps to brain atlases and functional connectivity diagrams, most of the standard teaching tools in neuroscience rely very heavily and most often solely on visual representation.
            </p>
            <p>
              This issue of accessibility came to the fore during our experience in teaching Cognitive Psychology at Ashoka University. A bright and engaged student in the class, who is visually challenged, found most of the study material in neuroscience to be inaccessible. Even popular neuroscience outreach materials (e.g., YouTube animations, visual simulations, or connectome atlases) are rarely designed with alternative sensory modalities in mind. There are next to no resources for neuroscience that make use of auditory or tactile formats.
            </p>
            <p>
              To support this student, we developed a 3D-printed brain model, which proved helpful. This experience laid the foundation for a deeper realization–there is a pressing need for a centralized, digital, and accessible platform for neuroscience education that is tailored for visually challenged learners, especially in India where access to such resources is limited in both urban and rural settings.
            </p>
            <div className="bg-muted p-6 rounded-lg mt-6 border-l-4 border-primary">
              <h3 className="font-semibold text-foreground mb-2">Addressing the gap with:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>An accessible website/platform with audio descriptions, text-to-speech compatibility, and haptic feedback integration.</li>
                <li>A free digital repository of tactile 3D-printable neuroscience models.</li>
                <li>Multimodal learning tools (e.g., sonified brain activity data, braille-compatible diagrams).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. The Solution */}
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] items-start">
          <div className="sticky top-24">
            <div className="flex items-center gap-3 text-primary mb-4">
              <Lightbulb className="h-8 w-8" aria-hidden="true" />
              <h2 className="text-3xl font-bold">The Solution</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              NewroView Platform
            </p>
          </div>
          <div className="space-y-6">
            <Card className="card-modern border-2">
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <p className="text-lg">
                  We propose to build <strong>NewroView</strong>, a multilingual, digital outreach platform designed to make resources in neuroscience accessible to visually challenged learners.
                </p>
                <div className="space-y-4 mt-6">
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Accessible Website</h3>
                    <p>Featuring audio descriptions, text-to-speech compatibility, haptic feedback, screen-reader support, keyboard navigation, high-contrast mode, and voice interaction. Designed to meet WCAG 2.1 AA standards for global accessibility compliance.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Auditory-Led Neuroscience Lessons</h3>
                    <p>A set of short, thematically organized podcast-style lessons (e.g., "The Brain and Memory", "The Visual System Beyond Vision") using rich auditory storytelling and non-visual analogies.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Interactive Maps</h3>
                    <p>Keyboard-navigable diagrams with sonification (e.g., pitch changes denote neural activation levels).</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Tactile Resource Hub</h3>
                    <p>Downloadable 3D-printable files (STL/OBJ) of brain regions, neurons, and lab tools with step-by-step audio instructions.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Regional Language Support</h3>
                    <p>Initial content in English, expanding to other Indian languages.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Example: A lesson on "The Visual Pathway"</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-card p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center gap-2"><Rocket className="h-4 w-4 text-primary" /> Website Experience</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li><strong>Keyboard:</strong> Press Tab to reach the lesson → Enter to open.</li>
                      <li><strong>Screen Reader:</strong> Hear: "Lesson 2: The Visual Pathway. Press H for headings."</li>
                      <li><strong>Haptic Feedback:</strong> Phone vibrates when interactive diagram loads.</li>
                      <li><strong>High-Contrast:</strong> Toggle via Ctrl+Alt+C (black background, yellow text).</li>
                    </ul>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center gap-2"><Volume2 className="h-4 w-4 text-primary" /> Auditory Lesson</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>Audio describes signal transmission: "Imagine a highway where cars (signals) speed toward the brain's occipital lobe..."</li>
                      <li>Non-visual analogy: Compare retinal layers to onion skins.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 3. Team Approach */}
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] items-start">
          <div className="sticky top-24">
            <div className="flex items-center gap-3 text-primary mb-4">
              <HeartHandshake className="h-8 w-8" aria-hidden="true" />
              <h2 className="text-3xl font-bold">Approach</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Team & Collaborative Effort
            </p>
          </div>
          <Card className="card-modern">
            <CardContent className="pt-6 text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Inclusive collaboration with students, educators, and community partners in co-creating the platform:
              </p>
              <ul className="list-disc pl-5 space-y-3">
                <li>Undergraduate students from diverse academic backgrounds of psychology, computer science, biology, and visual arts will be actively involved in designing 3D models, scripting lessons, building the platform, and conducting accessibility testing. Their interdisciplinary input will enrich both the scientific and experiential aspects of the project.</li>
                <li>We will work closely with the visually challenged student from our class, along with her peers to co-develop, test, and refine the content and interface.</li>
                <li>Community partners, including schools and NGOs working with visually impaired learners, will help us pilot the platform, offer feedback, and facilitate outreach to underserved regions.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 4. Impact */}
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] items-start">
          <div className="sticky top-24">
            <div className="flex items-center gap-3 text-primary mb-4">
              <TrendingUp className="h-8 w-8" aria-hidden="true" />
              <h2 className="text-3xl font-bold">Impact</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Outcomes & Vision
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-primary text-primary-foreground p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Broader Mission</h3>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">
                Challenge the notion that science must be "seen" to be understood – advancing non-visual cognition as a cornerstone of inclusive education.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="card-modern shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Short-Term (6–12 months)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-sm font-medium">Launch a beta version of NewroView with:</p>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5">
                    <li>10+ downloadable 3D-printable models (e.g., brain regions, neurons).</li>
                    <li>10+ audio-based neuroscience lessons (e.g., "The Auditory Cortex", "Memory Pathways").</li>
                    <li>Rigorous accessibility testing with visually challenged learners across 2+ partner institutions.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="card-modern shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Long-Term Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li><strong className="text-foreground">Scalable Science Education:</strong> Expand to regional languages (e.g., Hindi, Odia, Tamil). Grow into other STEM fields.</li>
                    <li><strong className="text-foreground">Systemic Change:</strong> Collaborate with educators, disability advocates, and policymakers to promote accessibility mandates in STEM curricula.</li>
                    <li><strong className="text-foreground">Equity in STEM:</strong> Empower visually challenged students to pursue STEM careers by breaking barriers.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      </section>

      {/* 7. Conclusion & Team Roster */}
      <section className="bg-muted py-16 border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              NewroView is not just a platform – it is a step toward democratizing neuroscience education by making it accessible to one of the most underserved learner populations. In doing so, we also broaden our own understanding of perception and the brain – not just through sight, but also touch, sound, and inclusivity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              With the support of the IndiaBioscience Outreach Grant, we aim to build a prototype that can scale, inspire, and spark a new conversation about accessibility in STEM outreach.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              Project Team
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card p-5 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <div className="flex flex-col gap-1 text-sm">
                    <span className="text-primary font-medium">{member.role}</span>
                    {member.affiliation && (
                      <span className="text-muted-foreground">{member.affiliation}</span>
                    )}
                    {member.detail && (
                      <span className="text-xs text-muted-foreground mt-2 bg-muted p-1.5 rounded inline-block w-fit">
                        {member.detail}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
