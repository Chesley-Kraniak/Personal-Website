import self_pic   from './self_300.jpg';
import resume_pdf from './Resume_RevD_Web.pdf';
import './App.css';

function App() {
  return Resume()
}

function Resume() {
  return (
    <div className="Resume">
      <div className="Header">
        <div className="Self-info">
          <p>
            Chesley Kraniak
          </p>
        </div>
        <div className="Self-pic-container">
          <img src={self_pic} alt="Chesley Kraniak" className="Self-pic"/>
        </div>
      </div>
      <div className="Resume-body">
        <p>
          <a href={resume_pdf}>Get the PDF of my résumé here</a>.
        </p>
        <hr/>
        <h3>About</h3>
          <p>
            My name is Chesley Kraniak. I am an engineer with 7 years of experience in
            aerospace manufacturing, quality, and software development.
          </p>
          <p>
            Automation and programming are pleasures for me. I started programming when I was
            16, which was the earliest I was able to talk my father into letting me &quot;risk&quot;
            damaging the family computer on my programming. Throughout college, I continued to
            program for fun, even though aerospace engineering requires only basic competency. I
            was originally brought into Bell for my ability to program,
            and my compulsion to learn more about automating my work ultimately led to the
            development of <i>Adaptive Machining</i> at Bell and the development of complete
            automation of inspection programming using a patent-pending compiler of my own design.
          </p>
        <h3>Programming Languages</h3>
          <ul>
            <li>
              <b>VB / C# / .Net</b>
              <p>
                I've spent more time in VB.Net over the last 5 years than any other language.
                VB.Net and C# are extremely similar to one another. My experience with C# (to
                the extent that it differs from VB.Net) is more modest, but still significant.
                Most of the more recent software projects in my team at Bell have been in C#.
              </p>
              <p>
                In my work, I've heavily used LINQ, xUnit, MoreLinq, and NLog. I've built and
                internally deployed a variety of NuGet packages. I've developed for WPF applications.
                I once integrated Lua into a .Net project, which required manually building the
                .dll from source (overlapping with my C++ skills).
              </p>
            </li>
            <li>
              <b>C / C++</b>
              <p>
                C++ is the language I use the most at home. It tends to be what I gravitate to when 
                I want to get serious with writing a program. For professional purposes, I use C++
                when working in CAA.
              </p>
              <p>
                I am moderately familiar with Boost, and have specifically used the signals2,
                geometry, and serialization libraries for personal work. I use Catch2 for unit
                testing, doxygen for code documentation, and CMake for the build system.
              </p>
              <p>
                C by itself is a small enough language that it's possible to essentially know
                the whole language without too much trouble. With my work on compiling C in&nbsp;
                <a href="#emp-twilight">EMPTwilight</a>, I can demonstrate I know C99 deeply.
              </p>
              <p>
                I have some familiarity with a few microcontrollers (PIC10, STM8) and have used
                non-GCC toolchains for them on a few occasions.
              </p>
            </li>
            <li>
              <b>Python</b>
              <p>
                For my internship at Bell I wrote a preprocessor and postprocessor for Fanuc's KAREL
                language in Python, which allowed our software to read
                and write programs for Fanuc industrial robots, enabling offline programming.
                As I transitioned into a full-time role in the <i>Advanced Quality</i> lab, I
                proactively sought information on how to automate my analysis chores. The Geomagic
                software had a Python API that I used to great effect. I ultimately automated the
                analysis of a number of important internal projects, saving weeks of effort and
                improving consistency, and supporting key development efforts at Bell.
              </p>
              <p>
                I generally use Python whenever I want to do quick analysis of something, so it's
                essentially used as a substitute for MATLAB. At other times, I might use it to
                prototype something quickly, especially if Python already has good libraries for
                what I want. I try to avoid using Python for serious work since I prefer serious
                work to have a more militant type system.
              </p>
            </li>
            <li>
              <b>Perl 6 / Raku</b>
              <p>
                See <a href="#emp-twilight">EMPTwilight</a> for my major experience in Perl 6.
                I also spent some time implementing NativeCall bindings for a number of parts
                of the Win32 API.
              </p>
            </li>
          </ul>
        <h3>Technologies</h3>
          <p>
            [Discuss Agile, Git, Azure]
          </p>
          <p>
            I have an understanding of G-code, APT, and DMIS. These are all important languages
            for people interested in manufacturing things. CAM software (e.g. Delmia, Mastercam)
            usually generates APT, and the APT gets converted to G-code using a post-processor
            (such as ICAM or IMS). DMIS is a language that is syntatically similar to APT and
            is used to control the coordinate measuring machines (CMMs) that ensure manufactured
            parts match the requirements that engineering sets in the GD&amp;T on the drawing.
          </p>
          <p>
            Thanks to my work on automated CMM program generation, I have a lot of experience in
            automating CATIA v6 / 3DEXPERIENCE. My focus was in COM automation, but I am also
            capable of both EKL and CAA automation.
          </p>
        <h3>Skills</h3>
          <p>
            [Discuss mentorship]
          </p>
          <p>
            I understand GD&amp;T well. I received Bell's internal GD&amp;T training,
            and have been actively reading, using, and building automation technology with and
            around GD&amp;T for my whole career.
          </p>
        <h3>Personal Projects</h3>
          <h4 id="emp-twilight">EMPTwilight</h4>
            <p>
              I spent a lot of time on a personal project for compiling C using Perl 6.
              The project left me with a ridiculously deep knowledge of the C language,
              compiler frontends, and a sense of confidence in my ability to write a compiler
              if it's needed. (Note: a professional should avoid writing a compiler unless
              there is a really solid business need for it; however, it's a <i>great</i> personal
              project.) In the end, I determined that the language (as of v6.d) was too slow
              to be useful.
            </p>
          <h4>Descriptor Or Value Either (DOVE)</h4>
            <p>
              I dislike both return codes and exceptions as error-handling mechanisms.
              In the last few years, functional-style approaches have grown on me, as I
              feel like they tend to be the most effective way to define errors out of existence
              (which is the best way to deal with errors). A somewhat typical way for functional
              languages to handle errors is to return an optional type. The DOVE is like this,
              but instead of returning a nullish value in the event of an error, exception
              information is returned in such a way that the user must specify a handling mechanism.
            </p>
            <p>
              A significant effect of this is to move information about exceptions into a function's
              signature, which helps it to be self-documenting.
            </p>
          <h4>Block Perch with Integrated Scale</h4>
            <p>
              For a time, I worked on a project involving building an always-on scale into
              a bird perch. Its main purpose would be to better track a falconry bird's state
              (which is very weight-dependent) and enable better forecasting. The project was
              eventually shelved, but not before I developed the electronics payload for it.
            </p>
            <p>
              The electronics consisted of a load cell, an in-amp, an ADC, and a Raspberry Pi 4.
              I developed a little C program for reading the load cell: [insert link]. This was
              run on a breadboard, and I was able to collect some data; a graph is included in
              the linked repository.
            </p>
          <h4>Geometric Constraint Solver</h4>
            <p>
              During work on manufacturing some falconry equipment, it became painfully clear
              that no decent open-source library was available that could solve 2D sketches the
              way CATIA or Solidworks do, so I set out to do this on my own.
            </p>
            <p>
              The result was a semi-modular solver system that could use a few different
              backends (optimlib and a custom gradient-descent solver) and was expandable.
              Point, arc, circle, and line segment geometries were defined. Constraints for
              point-point distance (including coincidence), line-line angle, parallelism,
              distance/angle ratio (including equal length/angle) were all developed and
              tested.
            </p>
            <p>
              While this library works and demonstrates skills such as C++, unit
              testing, and integration with optimlib, it has enough value
              that I don't want to open-source it. If you are interested, I can show 
              this solver to you directly from my machine so you can verify its existence.
            </p>
          <h3>Education</h3>
            <p>
              I received a BS (Hons) in Aerospace Engineering in 2014 from UT Arlington, magna
              cum laude.
            </p>
      </div>
    </div>
  )
}

export default App;
