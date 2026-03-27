import React from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mic, Clock } from 'lucide-react';

const PodcastScripts = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 border-primary-foreground/50">
            Work In Progress
          </Badge>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl leading-tight" tabIndex={-1}>
            Podcast Scripts
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-primary-foreground/90 font-medium leading-relaxed">
            Read along with the scripts for our upcoming audio lessons, currently in the making.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <Card className="card-modern">
            <CardHeader className="border-b bg-muted/30 pb-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1">
                  <Mic className="h-3.5 w-3.5" />
                  Episode 1
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground gap-1.5 font-medium">
                  <Clock className="h-4 w-4" />
                  approximately 15 minutes
                </div>
              </div>
              <CardTitle className="text-3xl font-bold">The Basics</CardTitle>
            </CardHeader>
            <CardContent className="pt-8 prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              
              <h3 className="text-2xl font-bold text-foreground">GLIA</h3>
              
              <p>As we had established earlier, neurons form an important component of our nervous system. However, to maintain the integrity or the functioning of these cells, other types of cells are required. These cells are called neuroglia or simply, glia. These cells were coined after the Greek word glia meaning “glue”, because earlier investigators believed that they acted like a glue that held neurons together. But this theory was debunked, as researchers later found out that glial cells actually serve more important functions than mere cellular glue. Despite this, the name remained unchanged.</p>
              
              <p>Glia can be found anywhere in the brain; wherever neurons are present in our brain, glia will be there to protect the neurons’ functions. Although they are smaller than neurons, their overall quantity in our body is approximately the same, with their concentration varying at different brain locations. These locations will be expanded upon in a later module.</p>
              
              <p>Till then, let us discuss the different types of glial cells and how they differ based on function. The most abundant type of glia are the astrocytes. In terms of structure, imagine a sprouting bean, but with multiple sprouting extensions instead of one. These cells wrap around the synapses (or the point of signal transmission) between multiple neurons serving the same purpose.</p>
              
              <p>By doing this, it shields the synaptic regions from chemicals in their surrounding environment. In addition, it takes up the ions and neurotransmitters from those regions, circulates them back into that space. This action promotes the synchronization of related neurons and their coherent functioning.</p>
              
              <p>Astrocytes also work on the blood vessels, or wire-like structures that circulate blood throughout our body. They work on the vessels present in the brain by expanding them specifically in the regions which are supposed to get activated at a particular time. In simple words, when the vessels expand, more nutrient-containing blood enters that region, which causes its immediate activation.</p>
              
              <p>Furthermore, astrocytes also respond to hormonal reactions at certain brain areas and in turn, influence neuron activity. In essence, astrocytes in particular have a diverse set of responsibilities that aid neurons in their timely activities.</p>
              
              <p>Apart from astrocytes, there are tiny cells called microglia that act as a part of our immune system. With a structure similar to astrocytes, they can be imagined as a doctor for our brain, as they help remove viruses and fungi. Simultaneously, they are also garbage-collectors, because they remove dead and damaged neurons from the brain.</p>
              
              <p>Thirdly, radial glia, also shaped like astrocytes, acts as a human resources team member who gives you a tour of the workplace and leads you to your assigned desk. Basically during our development as a fetus, these cells guide neurons to their respective destinations throughout the body and help them migrate from the brain and spinal cord region. Once the development is complete, they transform into either neurons or other types of glial cells.</p>
              
              <p>Lastly, oligodendrocytes and schwann cells contribute towards the development of myelin sheath around neurons. These cells are different on the basis of their location; oligodendrocytes work for neurons in the brain and spinal cord, whereas schwann cells do the same in the body’s peripheral regions, such as the limbs. Oligodendrocytes are shaped like astrocytes, and their extensions wrap around the axons to form the myelin sheath. However, schwann cells are different, as they exist in a slime-like structure. To myelinate an axon, they simply wrap themselves around it in different segments.</p>
              
              <h3 className="text-2xl font-bold text-foreground mt-10">Structure of a neuron -</h3>
              
              <p>Neurons are a type of cell that comprise the nervous system. These are responsible for receiving information and transmitting it to other cells. Let’s try to understand how a neutron is structured.</p>
              
              <p>Imagine holding a pebble, from which long extensions grow, somewhat like the roots of a plant; this is restricted to one side of the pebble. On the other side, the pebble merges into a long, shoelace-like extension. Keep in mind the proportions of the roots and the merging shoe lace. If the roots were the size of a shrub, the shoelace would be 25 city blocks long. Now back to our weird little structure - imagine the shoelace further brach out into little buds.</p>
              
              <p>Once we can comprehend this weird little structure, let’s start putting names to these parts.<br />
              The pebble would be the soma or cell body. This contains the nucleus - imagine a yolk inside an egg - ribosomes and mitochondria. Most of a neuron’s metabolic work occurs here.</p>
              
              <p>The roots coming out of the pebble would be the Dendrites. They get narrower towards their ends. They’re the antennae of the cell. If you ran your fingertip along a dendrite, it would feel rough because its surface is lined with tiny bumps, like the texture of fine sandpaper. These bumps are called Dendritic Spines, and they're like little docking stations, waiting to receive information from other neurons.</p>
              
              <p>The shoelace-like extension emerging from the pebble would be the axon. Unlike the bushy dendrites, the axon is a single, lengthy, thin fiber, and it has a constant width. The axon conveys an impulse toward other neurons, an organ, or a muscle. Picture this: the axon that lets you wiggle your toe starts in your lower back and travels all the way down your leg.</p>
              
              <p>An important addition to note here is that many vertebrate axons are covered with a smooth, fatty, insulating material called a myelin sheath. Imagine a straw through which the shoelace passes. The myelin sheath ensures the smooth and speedy transition of signals. It has interruptions, which would feel like bumps, known as nodes of Ranvier. The signal actually jumps from one gap to the next, which makes it travel even faster.</p>
              
              <p>The little buds, which the shoelace further branches into, would be presynaptic terminals. At that point, the axon releases chemicals that cross through the junction between that neuron and another cell. Just to be clear, these presynaptic terminals would send the signals which would be received by the dendrites of another neuron, thus taking us back to the roots, like structure, aka dendrites. The junction between the two is called a synapse, which we’ll talk about later.<br />
              But neurons aren't all the same. Let's use our sense of touch to explore two different types.<br />
              First, a motor neuron. Its job is to tell your muscles to move. Feel that pebble, the soma? It’s inside your spinal cord. The rough dendrites next to it are listening to other neurons in your spinal cord. But that long axon cable runs all the way out to a muscle in your arm. The terminal buttons at the end plug directly into the muscle fibers, delivering the message to "contract!”<br />
              Now, a sensory neuron is built backward. Its job is to detect information from the world, like touch. Imagine a touch receptor in your fingertip. From this receptor, a long, thin axon cable runs directly all the way back to your spinal cord. But here the little pebble, the soma, is like a small bump on the side of the cable, a rest stop along the highway. In this neuron, the message from your fingertip races past the soma and into the spinal cord without it being in the main path.</p>
              
              <p>A neuron, even when it is “resting,” is not truly resting. It is preparing. Today, we talk about the nerve impulse, the electrical message that travels along a neuron. Think of this impulse as a wave of motion that sweeps across a long rope when you give it a sharp flick.</p>
              
              <h3 className="text-xl font-bold text-foreground mt-8 uppercase tracking-wide">THE RESTING POTENTIAL</h3>
              <p>Picture a thin, flexible wall, like the skin of a balloon. This wall separates two different liquids: one inside the balloon, one outside. In a neuron, the cell membrane separates ions, tiny particles that carry electrical charges. Inside the neuron, there are more negative charges. Outside, lie more positive charges. This difference in charge creates a tension called the resting potential. You can imagine a resting potential like stretching a bowstring: the energy is stored, waiting for a release.<br />
              To maintain this tension, the neuron uses tiny pumps embedded in its membrane. These pumps are like diligent doormen who move three sodium ions out and two potassium ions in, one cycle at a time. Their rhythmic work keeps the inside negative, the outside positive. The neuron, in this state, is like a loaded spring i.e., stable, but charged.</p>
              
              <h3 className="text-xl font-bold text-foreground mt-8 uppercase tracking-wide">THE ACTION POTENTIAL</h3>
              <p>Now imagine someone finally lets go of the stretched bowstring. The stored energy releases, and motion follows. When a neuron gets the right signal, which is strong enough to push it past a point called the threshold, the action potential begins.<br />
              As soon as the threshold is reached, gates in the membrane snap open. These gates allow sodium ions, which have been waiting outside, to rush inside the neuron with force, like a crowd entering a concert the moment the gates open. This sudden rush flips the charge: the inside becomes positive, the outside negative. This reversal of charge is the action potential. It travels like a wave, not because individual ions move down the neuron, but because the opening of one gate triggers the next, and the next, and the next and so on. Much like the domino effect: the movement appears to travel forward even though each domino stays in place. This is how the electrical impulse moves along the axon.</p>
              
              <h3 className="text-xl font-bold text-foreground mt-8 uppercase tracking-wide">THE REFRACTORY PERIOD</h3>
              <p>After the action potential passes a segment of the axon, that segment cannot fire again immediately. This is called the refractory period, a brief recovery time. Think of it like catching your breath after blowing up a balloon. Even if you wanted to blow again right away, you need a moment to gather air. During this reset, sodium ions are pushed back out, potassium ions flow back in, and the membrane returns to its resting tension, the “bowstring” restrung. This period ensures that impulses travel forward, never backward.</p>
              
              <h3 className="text-xl font-bold text-foreground mt-8 uppercase tracking-wide">THE ALL-OR-NONE LAW</h3>
              <p>Neurons do not do “half impulses.” Either the action potential fires or it doesn’t. There is no in between. Like flicking a light switch, it’s either on, or off. A neuron CANNOT fire “a little bit.”<br />
              If the threshold is reached, the action potential fires with full strength. If the threshold is not reached, nothing fires. This is called the all-or-none law. What does change, however, is how often a neuron fires. Rapid firing signals urgency; slower firing signals calmness.</p>
              
              <h3 className="text-xl font-bold text-foreground mt-8 uppercase tracking-wide">THE ROLE OF MYELIN</h3>
              <p>Some axons are wrapped in a smooth, fatty covering called myelin. Imagine slipping a finger along a polished railing: movement is fast and smooth. In contrast, sliding your finger along rough wood slows you down. Myelin acts like that polished railing. It allows the action potential to “jump” from one gap in the myelin to the next. These gaps are called nodes of Ranvier. The impulse is not just like walking step by step, but like leaping across stepping stones. This process is called saltatory conduction, meaning “jumping conduction.” These jumps make the signal move much faster thereby increasing efficiency, speed, and precision.</p>

            </CardContent>
          </Card>
          
        </div>
      </section>
    </Layout>
  );
};

export default PodcastScripts;
