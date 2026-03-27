import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Printer, Download, Settings, Heart, AlertTriangle, Blocks, CheckCircle2 } from 'lucide-react';
import { AccessibleButton } from '@/components/AccessibleButton';

const BrainModel = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-secondary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 border-primary-foreground/50">
            Featured Model
          </Badge>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl leading-tight" tabIndex={-1}>
            3D Printable Human Brain Model
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-primary-foreground/90 font-medium leading-relaxed">
            A full-size model of a real human brain, created from an MRI scan.
          </p>
          <div className="mt-8 flex justify-center">
            <AccessibleButton 
              size="lg"
              variant="secondary"
              className="gap-2"
              onClick={() => window.open('https://www.printables.com/model/207798-full-size-human-brain', '_blank')}
              aria-label="Download printable files from printables.com"
              hapticFeedback="heavy"
              announcement="Opening Printables dot com in a new tab"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              Download STL/3MF Files
            </AccessibleButton>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          
          <div className="space-y-12">
            {/* About this Model */}
            <div>
              <div className="flex items-center gap-3 text-primary mb-6">
                <Blocks className="h-8 w-8" aria-hidden="true" />
                <h2 className="text-3xl font-bold">About this Model</h2>
              </div>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  This is a full-size model of a real human brain, created from an MRI scan. It includes the cortex, cerebellum, brain stem, and corpus callosum, and comes with a display stand which can be used to display or use the model for teaching purposes.
                </p>
              </div>
            </div>

            {/* Images Gallery */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden border-2 shadow-sm">
                <img 
                  src="/models/brain_img1.png" 
                  alt="3D printed full-size human brain model shown from the side" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden border-2 shadow-sm">
                <img 
                  src="/models/brain_img2.png" 
                  alt="3D printed human brain halves detached showing internal structures like the corpus callosum" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Print Instructions */}
            <div>
              <div className="flex items-center gap-3 text-primary mb-6">
                <Printer className="h-8 w-8" aria-hidden="true" />
                <h2 className="text-3xl font-bold">3D Printing Instructions</h2>
              </div>
              
              <div className="space-y-8">
                <Card className="card-modern shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="w-5 h-5 text-primary" /> 
                      Files & Software
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Download the 3MF files from the link provided above. The 3MF format carries pre-configured supports and print pauses, which are essential for a clean print.</li>
                      <li>Use a slicer software (e.g., OrcaSlicer, PrusaSlicer, SuperSlicer, Cura) to open and slice the 3MF files. The custom supports are embedded in this file and will load automatically.</li>
                      <li><strong className="text-foreground">Note:</strong> These files are extremely high-resolution and quite large due to which the slicer may take some time to decompress and slice the model.</li>
                    </ul>
                  </CardContent>
                </Card>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Choosing Your Print</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="border-l-4 border-l-primary">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Split Brain (Halves)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Two-piece print with magnet holes and a mid-print pause.</p>
                      </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-secondary">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Solid Merged Brain</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Single-piece, no split or magnets.</p>
                      </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-accent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Brain Stand</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Separate display stand.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-success" />
                      Printing the Split Brain
                    </h3>
                    <ul className="space-y-4 text-muted-foreground ml-2 border-l-2 border-muted pl-6">
                      <li className="relative">
                        <span className="absolute -left-[30px] flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground tracking-tighter ring-4 ring-background">1</span>
                        Load the 3MF file for the left and right halves into the slicer of choice. The supports and pause points are already set up.
                      </li>
                      <li className="relative">
                        <span className="absolute -left-[30px] flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground tracking-tighter ring-4 ring-background">2</span>
                        <strong>Bed surface:</strong> Use a smooth PEI sheet (not textured/satin). This ensures the two halves mate together neatly along the split line. Good bed adhesion is essential. Most of the model prints on supports, so a well-prepared bed prevents failures.
                      </li>
                      <li className="relative">
                        <span className="absolute -left-[30px] flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground tracking-tighter ring-4 ring-background">3</span>
                        <strong>Magnets:</strong> The magnet holes are cylindrical [5.3 mm (diameter) × 3.3 mm (height)] designed for 34 magnets of size 5×3 mm.
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>When the printer pauses, insert one magnet per hole.</li>
                          <li>Add a small drop of super glue before inserting each magnet to prevent rattling.</li>
                          <li>Check magnet orientation carefully! If inserted backwards, the halves will push apart instead of clicking together.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6 text-success" />
                      Printing the Stand & Scaled Versions
                    </h3>
                    <div className="space-y-4 text-muted-foreground bg-muted p-6 rounded-xl">
                      <p>
                        <strong className="text-foreground">The Stand:</strong> The stand prints with no supports and requires no special configuration, simply load the file and print.
                      </p>
                      <p>
                        <strong className="text-foreground">Scaled-Down Version:</strong> If you want a solid, scaled-down model that fits in the palm of your hand, use the merged (solid) brain file and print at 50% scale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="card-modern shadow-medium border-warning sticky top-24">
              <CardHeader className="bg-warning/10 pb-4 border-b">
                <CardTitle className="flex items-center gap-2 text-warning font-bold">
                  <AlertTriangle className="h-5 w-5 fill-warning text-warning-foreground" />
                  Tips for Best Results
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4 text-sm text-foreground">
                <p>
                  <strong className="block text-base mb-1">Time Expectation</strong>
                  Expect a total print time of 15–20 hours for the full split brain.
                </p>
                <div className="h-px bg-border w-full"></div>
                <p>
                  <strong className="block text-base mb-1">Material Choice</strong>
                  ABS and PLA filaments work well due to their rigidity during printing.
                </p>
                <div className="h-px bg-border w-full"></div>
                <p>
                  <strong className="block text-base mb-1">Support Removal</strong>
                  Support removal requires patience. Use flush cutters and a craft knife. Work slowly to avoid damaging the cortical surface detail.
                </p>
              </CardContent>
            </Card>

            <Card className="card-modern shadow-sm border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Heart className="h-5 w-5 text-destructive fill-destructive/20" />
                  Attribution
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm space-y-3">
                <p>
                  This model was created by <strong>Julia Ebert</strong>, a neuroscience researcher, who converted her own MRI scan into a printable 3D model using FreeSurfer and Meshlab.
                </p>
                <p>
                  Here's the link to her website:{' '}
                  <a 
                    href="https://docs.juliaebert.com/projects/3d-print-brain" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium break-all"
                  >
                    https://docs.juliaebert.com/projects/3d-print-brain
                  </a>
                </p>
                <p className="italic">
                  We are grateful for her generosity in sharing it freely with the community.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default BrainModel;
