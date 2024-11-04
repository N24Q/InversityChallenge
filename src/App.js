import React, { useState } from "react";
import "./styles.css";

const LandingPage = ({ onGetStarted }) => (
  <>
    <h2 className="Youth">❏Youth</h2>
    <h3 className="Tabs">
      More about us ‎ ‎ ‎ ‎ ‎ ‎ Enquire ‎ ‎ ‎ ‎ ‎ ‎ Financial Times
    </h3>
    <header className="Title">
      <h1 className="Slogan">Informing Our Future</h1>
      <p className="HowItworks">
        Click 'Sign up' to create your free account. Once signed in, you'll have
        access to curated <br></br>news content, interactive discussions, and a
        community of young minds shaping the future.
      </p>
      <button className="SignUp" onClick={onGetStarted}>
        [Sign up]
      </button>
    </header>

    <div>
      <div className="About">
        <h2 className="AboutTitle">
          <u>About Us</u>
        </h2>
        <p className="AboutContents">
          ❏Youth is your gateway to staying informed about what matters most to
          your generation. We deliver news in an engaging, accessible format,
          covering all news topics you may be interested in.
        </p>
      </div>
    </div>
    <p className="Credits">
      <b>Developed by Nathan Quinn. Created using CodeSandbox.</b>
    </p>
  </>
);

const SignInForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    age: "",
    location: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2 className="Youth">❏Youth</h2>
      <h2 className="FormTitle">Create Your Account</h2>
      <form className="Form" onSubmit={handleSubmit}>
        <div className="FirstName">
          <label>
            <span>First Name‎ ‎ ‎ ‎ ‎ </span>
          </label>
          <input
            type="text"
            name="firstName"
            required
            onChange={handleChange}
          />
        </div>
        <div className="Age">
          <label>Age (years)‎ ‎ ‎ ‎ </label>
          <input
            type="number"
            name="age"
            min="13"
            required
            onChange={handleChange}
          />
        </div>
        <div className="Location">
          <label>Location‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎</label>
          <input type="text" name="location" required onChange={handleChange} />
        </div>
        <div className="Email">
          <label>Email‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </label>
          <input type="email" name="email" required onChange={handleChange} />
        </div>
        <div className="Password">
          <label>Create Pass‎ ‎ ‎ </label>
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="FormSubmit">
          <button type="submit">[Sign Up]</button>
        </div>
      </form>
    </div>
  );
};

const HomePage = ({ onSubmit }) => (
  <>
    <div>
      <div>
        <h2 className="Youth">❏Youth</h2>
        <h3 className="Tabs">
          <u>Home</u> ‎ ‎ ‎ ‎ ‎ Forums ‎ ‎ ‎ ‎ ‎ Discover ‎ ‎ ‎ ‎ ‎ Settings ‎ ‎
          ‎ ‎ ‎ Profile
        </h3>
        <h2 className="HomePage">Home Page</h2>
        <div className="VideoBackground">
          <p className="VideoTitle">Mass timber: the future of construction?</p>
          <p className="CommentsTitle">Comments</p>

          <div className="Video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Lth1hFeoaYU?si=-yJMj-6ViCD4dWv1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="CommentsContent">
              <u>Nathan</u>
              <br></br>Love this video! <b>▲ 8 ▼ 0</b>
              <br></br>
              <br></br>
              <u>Junayd</u>
              <br></br>Very informative <b>▲ 5 ▼ 2</b>
              <br></br>
              <br></br>
              <u>Steve</u>
              <br></br>Thanks for this video <b>▲ 7 ▼ 1</b>
              <br></br>
              <br></br>
              <u>Tom</u>
              <br></br>Interesting topic <b>▲ 3 ▼ 0</b>
              <br></br>
              <br></br>
              <u>Sarah</u>
              <br></br>Anyone wanna discuss this?<b>▲ 7 ▼ 1</b>
              <br></br>
              <br></br>
              <u>Add Comment:</u>
              <br></br>
              <br></br> ------------------------------- [Post]
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>{/* Video placeholder */}</div>
        <div className="VideoSummary">
          <h3 className="SummaryTitle">AI Video Summary:</h3>
          <div class="scroll-bg">
            <div class="scroll-div">
              <div class="scroll-object"></div>
              <b>
                <u>Summary</u>
              </b>
              <br></br>- Mass timber construction is gaining popularity,
              exemplified by a large-scale project in Stockholm, offering
              sustainability, speed, and potential for reuse.<br></br>
              <br></br>
              <b>
                <u>Highlights</u>
              </b>
              <br></br>- Stockholm is building a city of mass timber, featuring
              7,000 offices and 2,000 homes.<br></br>- Cross-laminated timber
              provides strength comparable to concrete and steel.<br></br>- Mass
              timber construction is faster, reducing project time by up to 25%.
              <br></br>- Modular structures allow for disassembly and reuse at
              the end of their life cycle.<br></br>- Concerns about fire safety
              in tall timber buildings are being addressed through research.
              <br></br>- Initial costs of timber are higher, but faster
              construction can lead to quicker rental income.<br></br>- Global
              demand for mass timber is expected to double in the next five
              years.<br></br>
              <br></br>
              <b>
                <u>Key Insights</u>
              </b>
              <br></br>- Sustainability: Mass timber is seen as a more
              sustainable alternative to concrete and steel, leveraging locally
              sourced materials. This can significantly reduce carbon footprints
              in construction.<br></br>- Speed of Construction: The quick
              assembly of mass timber structures allows projects to be completed
              swiftly, which can lead to reduced labor costs and faster returns
              on investment.<br></br>- Modular Design: The ability to
              disassemble and reuse timber components enhances the
              sustainability of buildings, enabling a circular economy approach
              in construction.<br></br>- Fire Safety Research: Ongoing studies
              into fire safety for tall timber buildings aim to mitigate risks,
              ensuring that safety standards are met without compromising
              design.<br></br>- Cost vs. Value: While material costs for timber
              may be higher, the overall financial benefits from reduced
              construction time and quicker occupancy can outweigh initial
              expenses.<br></br>- Sustainable Supply Concerns: As demand for
              mass timber rises, ensuring a sustainable supply of wood becomes
              critical, prompting discussions about forest management and
              industry practices.<br></br>- Industry Evolution: The mass timber
              sector is rapidly evolving, with each new project contributing to
              a growing body of knowledge that will enhance the efficiency and
              safety of timber construction.<br></br>
            </div>
          </div>
        </div>
        <div className="VideoBackground">
          <p className="VideoTitle">
            Cold War 2.0 ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
            ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎{" "}
          </p>
          <p className="CommentsTitle">Comments</p>

          <div className="Video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cFyW7l4Hn0o?si=gVjeoOKg50dAgGWc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="CommentsContent">
              <u>Brian</u>
              <br></br>Super interesting <b>▲ 8 ▼ 0</b>
              <br></br>
              <br></br>
              <u>Max</u>
              <br></br>Can you cover this more? <b>▲ 5 ▼ 2</b>
              <br></br>
              <br></br>
              <u>Adam</u>
              <br></br>I made a forum about this <b>▲ 7 ▼ 1</b>
              <br></br>
              <br></br>
              <u>Jess</u>
              <br></br>Thanks for this <b>▲ 3 ▼ 0</b>
              <br></br>
              <br></br>
              <u>John</u>
              <br></br>DM me to discuss<b>▲ 7 ▼ 1</b>
              <br></br>
              <br></br>
              <u>Add Comment:</u>
              <br></br>
              <br></br> ------------------------------- [Post]
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>{/* Video placeholder */}</div>
        <div className="VideoSummary">
          <h3 className="SummaryTitle">AI Video Summary:</h3>
          <div class="scroll-bg">
            <div class="scroll-div">
              <div class="scroll-object"></div>
              <b>
                <u>Summary</u>
              </b>
              <br></br>
              The video discusses the contemporary geopolitical landscape,
              likening it to a new Cold War characterised by bloc mentality,
              protectionist economic policies, and the reorientation of global
              supply chains, particularly between the US and China. It
              emphasises the competition for technological dominance, especially
              in microprocessors and artificial intelligence, and the impacts of
              these developments on global trade and investment strategies.
              <br></br>
              <br></br>
              <b>
                <u>Shift to Bloc Mentality</u>
              </b>
              <br></br>
              The global economic environment is shifting towards a bloc
              mentality where countries prioritise protecting their domestic
              markets and industries. This involves reducing dependencies on
              rival economic blocs, particularly between the US and China,
              leading to a redefinition of trade routes and foreign direct
              investments.<br></br>
              <b>
                <u>Technological Competition</u>
              </b>
              <br></br>A key aspect of the new Cold War dynamic is the
              competition in technology, with China having advantages in various
              technologies while the US leads in critical areas such as high-end
              microprocessors. This technological rivalry influences economic
              and military strategies of both countries.<br></br>
              <b>
                <u>Economic Strategies Amid Demographic Challenges:</u>
              </b>
              <br></br>
              As both economies face demographic issues, they are turning to
              different solutions; China is focusing on robotics to compensate
              for labour shortages, while the US is escalating investments in
              artificial intelligence, leveraging technological advancements to
              bolster its service economy.<br></br>
              <b>
                <u>Reorganisation of Globalization</u>
              </b>
              <br></br>
              Instead of true de-globalization, the world is witnessing a
              reorganisation of globalisation where interaction is reduced
              between rival blocs but intensified within each bloc. This change
              shapes the way economic relations are structured in this new
              geopolitical context.<br></br>
              <b>
                <u>Impact on Global Players</u>
              </b>
              <br></br>
              Countries not aligned with either the US or China face significant
              choices: selecting a camp to align with or attempting to maintain
              a neutral position. European countries, for instance, are
              implementing tariffs on Chinese products to protect their markets,
              signalling the complexities faced by intermediate players in this
              geopolitical environment.<br></br>
              <b>
                <u>Sustained US Stance on China</u>
              </b>
              <br></br>
              The US's hawkish stance towards China is expected to remain
              consistent regardless of the administration. Both the Trump and
              Biden administrations have treated China as a primary economic
              competitor, indicating that this adversarial relationship will
              persist, thus affecting market dynamics and future investments.
              <br></br>
            </div>
          </div>
        </div>
        <div className="VideoBackground">
          <p className="VideoTitle">
            Sensitive content example ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎{" "}
          </p>
          <p className="CommentsTitle">Comments</p>

          <div className="Video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/eVKqbb7WPLU?si=ys4dq3bTh5796_Gc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="CommentsContent">
              <u>Sam</u>
              <br></br>Very eye opening <b>▲ 8 ▼ 0</b>
              <br></br>
              <br></br>
              <u>Adam</u>
              <br></br>Glad this is covered <b>▲ 5 ▼ 2</b>
              <br></br>
              <br></br>
              <u>Tilly</u>
              <br></br> Sad to see <b>▲ 7 ▼ 1</b>
              <br></br>
              <br></br>
              <u>Harry</u>
              <br></br>I'd like to read more on this <b>▲ 3 ▼ 0</b>
              <br></br>
              <br></br>
              <u>Jake</u>
              <br></br>This is important <b>▲ 7 ▼ 1</b>
              <br></br>
              <br></br>
              <u>Add Comment:</u>
              <br></br>
              <br></br> ------------------------------- [Post]
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>{/* Video placeholder */}</div>
        <div className="VideoSummary">
          <h3 className="SummaryTitle">AI Video Summary:</h3>
          <div class="scroll-bg">
            <div class="scroll-div">
              <div class="scroll-object"></div>
              <b>
                <u>Summary</u>
              </b>
              <br></br>- Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.<br></br>
              <br></br>
              <b>
                <u>Highlights</u>
              </b>
              <br></br>- Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.<br></br>- Cross-laminated timber provides strength
              comparable to concrete and steel.<br></br>- Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              <br></br>- Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.<br></br>- Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
              <br></br>- Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.<br></br>- Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.<br></br>
              <br></br>
              <b>
                <u>Key Insights</u>
              </b>
              <br></br>- Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.<br></br>- Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.<br></br>- Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.<br></br>- Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.<br></br>- Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.<br></br>- Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.<br></br>- Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.<br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState("landing");

  const handleGetStarted = () => {
    setCurrentPage("signin");
  };

  const handleSignIn = (formData) => {
    console.log("Form data:", formData);
    setCurrentPage("news");
  };

  return (
    <div>
      {currentPage === "landing" && (
        <LandingPage onGetStarted={handleGetStarted} />
      )}
      {currentPage === "signin" && <SignInForm onSubmit={handleSignIn} />}
      {currentPage === "news" && <HomePage />}
    </div>
  );
};

export default App;
