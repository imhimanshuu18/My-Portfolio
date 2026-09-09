const tools = ["Figma","Framer","Adobe Photoshop","VS Code","HTML","CSS","JavaScript","Bootstrap","jQuery","PHP","ChatGPT","Claude"];

const projects = [
  {
    title:"Opulent Station",
    slug:"opulent-station",
    image:"images/projects/opulent-station.png",
    link:"https://www.behance.net/gallery/253533023/Opulent-Station-E-commerce-Website-Design",
    category:"Web · E-commerce",
    filter:"Website UI",
    description:"A modern e-commerce website focused on a seamless shopping experience — intuitive UIs, product pages and responsive layouts with strong usability and conversion-focused design.",
    tags:["UI/UX","Figma","Photoshop"],
    gradient:"g1"
  },

  {
    title:"Anand Waterproofing",
    slug:"AW",
    image:"images/projects/aw.png",
    link:"https://anandwaterproofingcowebsite.vercel.app",
    category:"Web · Waterproofing",
    filter:"Web Development",
    description:"A modern website for a creative agency to showcase its services, portfolio and brand identity — user-centered layouts with a strong focus on usability and responsive design.",
    tags:["UI/UX","Figma","Html/css/js"],
    gradient:"g2"
  },

  {
    title:"Kunyo GiftCard",
    slug:"kunyo-giftcard",
    image:"images/projects/kunyo-giftcard.png",
    link:"https://www.behance.net/gallery/253524815/Kunyo-Gift-Card-Website-UIUX-Case-Study",
    category:"Web · Redesign",
    filter:"Web Development",
    description:"A redesign of the Kunyo GiftCard website — a modern, user-centered interface with improved usability, navigation and visual consistency.",
    tags:["Web design","Figma","User experience "],
    gradient:"g3"
  },
  
  {
    title:"Ixxhu",
    slug:"ixxhu",
    image:"images/projects/ixxhu.png",
    link:"https://www.behance.net/gallery/255047615/Ixxhu-Creative-Agency-Website",
    category:"Web · Creative Agency",
    filter:"Website UI",
    description:"A modern website for a creative agency to showcase its services, portfolio and brand identity — user-centered layouts with a strong focus on usability and responsive design.",
    tags:["UI/UX","Figma","Photoshop"],
    gradient:"g4"
  },

  {
    title:"Mobile App UI",
    slug:"mobile-app-ui",
    image:"images/projects/mobile-app-ui.jpg",
    link:"https://www.behance.net/",
    category:"Mobile · UI/UX",
    filter:"App UI",
    description:"A clean, intuitive mobile app interface designed in Figma — focused on smooth user flows, clear hierarchy and a modern look.",
    tags:["UI/UX","Figma","Prototyping"],
    gradient:"g5"
  },

  {
    title:"Zipten",
    slug:"Zipten",
    image:"images/projects/zipten.png",
    link:"https://www.behance.net/gallery/253521993/Zipten-Groceries-Website-Design",
    category:"Web · Groceries",
    filter:"Website UI",
    description:"A modern grocery shopping experience designed for Zipten, making it easy to discover, browse, and order everyday essentials through a clean and intuitive interface.",
    tags:["UI/UX","Figma","Photoshop"],
    gradient:"g6"
  }
];

const services = [
  ["UI/UX Design","Intuitive, user-centered interfaces designed in Figma — from research and user flows to polished high-fidelity screens.","palette","service-1"],
  ["Web Design","Modern, responsive websites and digital products with strong visual hierarchy and conversion-focused layouts.","layers","service-2"],
  ["Frontend Development","Bringing designs to life with HTML, CSS, JavaScript, Bootstrap and jQuery — clean, responsive and pixel-accurate.","code","service-3"],
  ["Wireframing & Prototyping","Low- to high-fidelity wireframes and interactive prototypes that let teams test and refine ideas before building.","search","service-4"],
  ["Responsive Design","Interfaces that look and feel right on every screen size — mobile-first layouts that adapt seamlessly.","zap","service-5"],
  ["Branding & Visuals","Branding and marketing creatives with consistent visual assets across every digital platform and touchpoint.","heart","service-6"]
];

const processSteps = [
  ["01","Discover","I dig into the problem, the users and the business goals before touching a single pixel."],
  ["02","Define","User flows and wireframes turn raw insights into a clear, shared product direction."],
  ["03","Design","High-fidelity UI and interactive prototypes in Figma — tested and refined until it feels obvious."],
  ["04","Develop","Clean, responsive frontend code that stays true to the design, pixel for pixel."]
];

const skills = [
  ["Figma",92],
  ["UI Design",90],
  ["UX Design",86],
  ["Wireframing & Prototyping",88],
  ["HTML & CSS",85],
  ["JavaScript",72],
  ["Responsive Design",85],
  ["Bootstrap",80]
];

const testimonials = [
  ["Himanshu completely transformed the way our website looks and feels. The redesign was much cleaner, more modern, and easier to navigate. He understood our brand and translated it into a UI that actually feels built for our customers.","Kunal Timilsina","Founder of Kunyo.Co","KC","av-1"],
  ["Working with Himanshu on the Opulent Station website was a smooth experience. He paid attention to the smallest details, from typography and spacing to the overall user flow. The final interface feels premium without sacrificing usability.","Bibek Shrestha","Opulent Station","OS","av-2"],
  ["Himanshu focused on both design and usability. The final UI was clean, practical, and easy for our team to develop.","Product Owner","NRX Global","NRX","av-3"]
];


function icon(name){
  return `<i data-lucide="${name}"></i>`;
}


function renderTools(){
  const track=document.getElementById("marqueeTrack");
  track.innerHTML=[...tools,...tools].map(t=>`<span class="tool-pill"><i></i>${t}</span>`).join("");
}


function renderFilters(active="All"){
  document.getElementById("filters").innerHTML=["All","Website UI","Web Development","App UI","Dashboard UI"].map(f=>`<button class="filter-btn ${f===active?"active":""}" data-filter="${f}">${f}</button>`).join("");

  document.querySelectorAll(".filter-btn").forEach(b=>
    b.addEventListener("click",()=>renderProjects(b.dataset.filter))
  );
}


function renderProjects(active="All"){
  renderFilters(active);

  const list=active==="All"
    ? projects
    : projects.filter(p=>p.filter===active);

  document.getElementById("projectGrid").innerHTML=list.map((p,i)=>`
    <a 
      href="${p.link}" 
      target="_blank" 
      rel="noopener noreferrer"
      class="project-card reveal visible" 
      style="transition-delay:${(i%2)*100}ms"
    >

      <div class="project-cover">
        <img 
          src="${p.image}" 
          alt="${p.title} project preview" 
          class="project-image"
        >
        <span class="category">${p.category}</span>
      </div>

      <div class="project-body">
        <div class="project-title-row">
          <h3 class="project-title">${p.title}</h3>
          <span class="arrow-circle">${icon("arrow-up-right")}</span>
        </div>

        <p>${p.description}</p>

        <div class="tags">
          ${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}
        </div>
      </div>

    </a>
  `).join("");

  if(window.lucide) lucide.createIcons();

  observeReveals();
}


function renderServices(){
  document.getElementById("servicesGrid").innerHTML=services.map((s,i)=>`
    <article class="service-card reveal" style="transition-delay:${(i%3)*100}ms">
      <div class="service-icon ${s[3]}">${icon(s[2])}</div>
      <h3>${s[0]}</h3>
      <p>${s[1]}</p>
    </article>
  `).join("");
}


function renderProcess(){
  document.getElementById("processGrid").innerHTML=
    `<div class="process-line"></div>`+
    processSteps.map((p,i)=>`
      <article class="process-item reveal" style="transition-delay:${i*120}ms">
        <div class="process-number">${p[0]}</div>
        <h3>${p[1]}</h3>
        <p>${p[2]}</p>
      </article>
    `).join("");
}


function renderSkills(){
  document.getElementById("skillsList").innerHTML=skills.map((s,i)=>`
    <li>
      <div class="skill-head">
        <span>${s[0]}</span>
        <span>${s[1]}%</span>
      </div>
      <div class="skill-track">
        <div 
          class="skill-fill" 
          data-level="${s[1]}" 
          style="transition-delay:${i*90}ms"
        ></div>
      </div>
    </li>
  `).join("");
}


function renderTestimonials(){
  document.getElementById("testimonialGrid").innerHTML=testimonials.map((t,i)=>`
    <figure class="testimonial reveal" style="transition-delay:${i*120}ms">
      ${icon("quote")}
      <blockquote>"${t[0]}"</blockquote>
      <figcaption>
        <span class="avatar-initials ${t[4]}">${t[3]}</span>
        <div>
          <strong>${t[1]}</strong>
          <small>${t[2]}</small>
        </div>
      </figcaption>
    </figure>
  `).join("");
}


function typeWords(){
  const words=[
    "user experiences.",
    "responsive websites.",
    "digital products.",
    "clean interfaces."
  ];

  const el=document.getElementById("typedWord");
  let wi=0,ci=0,deleting=false;

  function tick(){
    const word=words[wi];

    el.textContent=deleting
      ? word.slice(0,ci--)
      : word.slice(0,ci++);

    let speed=deleting?45:75;

    if(!deleting && ci>word.length){
      deleting=true;
      speed=1400;
    }
    else if(deleting && ci<0){
      deleting=false;
      wi=(wi+1)%words.length;
      ci=0;
      speed=400;
    }

    setTimeout(tick,speed);
  }

  tick();
}


function observeReveals(){
  const els=document.querySelectorAll(".reveal:not(.observer-added)");

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },{threshold:.15});

  els.forEach(e=>{
    e.classList.add("observer-added");
    observer.observe(e);
  });
}


function setupSkillsAnimation(){
  const card = document.querySelector(".skills-card");
  const fills = document.querySelectorAll(".skill-fill");

  if(!card || !fills.length) return;

  // Start all bars from 0%
  fills.forEach(el => {
    el.style.width = "0%";
  });

  const startAnimation = () => {
    fills.forEach((el, i) => {
      setTimeout(() => {
        el.style.width = el.dataset.level + "%";
      }, i * 120);
    });
  };

  const observer = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting){
      startAnimation();
      observer.disconnect();
    }
  }, {
    threshold: 0.2
  });

  observer.observe(card);
}


function setupHeader(){
  const header=document.getElementById("siteHeader");
  const menuBtn=document.getElementById("menuBtn");
  const mobile=document.getElementById("mobileMenu");

  window.addEventListener(
    "scroll",
    ()=>header.classList.toggle("scrolled",scrollY>24),
    {passive:true}
  );

  menuBtn.addEventListener(
    "click",
    ()=>mobile.classList.toggle("open")
  );

  mobile.querySelectorAll("a").forEach(a=>
    a.addEventListener("click",()=>mobile.classList.remove("open"))
  );
}


function setupForm(){

  const form = document.getElementById("contactForm");
  const error = document.getElementById("formError");

  const alertBox = document.getElementById("successAlert");
  const successText = document.getElementById("successText");

  const closeBtn = document.getElementById("successClose");
  const okBtn = document.getElementById("successOk");

  const submitBtn = document.getElementById("submitBtn");


  if(!form) return;


  function closeSuccess(){

    alertBox.hidden = true;

    document.body.style.overflow = "";

  }


  function showSuccess(name,email){

    const firstName = name.split(/\s+/)[0];

    successText.innerHTML =
      `Thanks, ${firstName}. I'll get back to you at <span>${email}</span> very soon.`;

    alertBox.hidden = false;

    document.body.style.overflow = "hidden";

    if(window.lucide){
      lucide.createIcons();
    }

  }


  form.addEventListener("submit", async function(e){

    e.preventDefault();


    const data = new FormData(form);

    const name = (data.get("name") || "").trim();
    const email = (data.get("email") || "").trim();
    const message = (data.get("message") || "").trim();


    /* CLEAR ERROR */

    error.hidden = true;
    error.textContent = "";


    /* VALIDATION */

    if(!name || !email || !message){

      error.textContent = "Please fill in every field.";
      error.hidden = false;

      return;
    }


    if(!/^\S+@\S+\.\S+$/.test(email)){

      error.textContent = "Please enter a valid email address.";
      error.hidden = false;

      return;
    }


    /* LOADING */

    submitBtn.disabled = true;

    submitBtn.querySelector("span").textContent = "Sending...";


    try{

      const response = await fetch(form.action,{

        method:"POST",

        body:data,

        headers:{
          "Accept":"application/json"
        }

      });


      const result = await response.json();


      if(!response.ok || !result.success){

        throw new Error(
          result.message || "Something went wrong. Please try again."
        );

      }


      /* SUCCESS */

      form.reset();

      showSuccess(name,email);


    }catch(err){

      error.textContent =
        err.message || "Unable to send message. Please try again.";

      error.hidden = false;

    }finally{

      submitBtn.disabled = false;

      submitBtn.querySelector("span").textContent =
        "Send message";

    }

  });


  /* CLOSE BUTTON */

  closeBtn.addEventListener("click",closeSuccess);


  /* OK BUTTON */

  okBtn.addEventListener("click",closeSuccess);


  /* CLICK OUTSIDE POPUP */

  alertBox.addEventListener("click",function(e){

    if(e.target === alertBox){

      closeSuccess();

    }

  });


  /* ESC KEY */

  document.addEventListener("keydown",function(e){

    if(e.key === "Escape" && !alertBox.hidden){

      closeSuccess();

    }

  });

}


document.addEventListener("DOMContentLoaded",()=>{
  renderTools();
  renderProjects();
  renderServices();
  renderProcess();
  renderSkills();
  renderTestimonials();

  typeWords();
  setupHeader();
  setupSkillsAnimation();
  setupForm();
  observeReveals();

  document.getElementById("year").textContent=new Date().getFullYear();

  document.getElementById("backTop").addEventListener(
    "click",
    ()=>scrollTo({top:0,behavior:"smooth"})
  );

  if(window.lucide) lucide.createIcons();
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("specialCard").classList.add("show");
  }, 700);
});

document.getElementById("closeCard").onclick = () => {
  document.getElementById("specialCard").classList.remove("show");
};



// esports js

const nav = document.getElementById("navbar");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 20));
const menu = document.getElementById("menu"), links = document.querySelector("nav");
menu.onclick = () => { links.style.display = links.style.display === "flex" ? "none" : "flex"; links.style.position = "absolute"; links.style.top = "65px"; links.style.left = "16px"; links.style.right = "16px"; links.style.padding = "18px"; links.style.background = "#090909"; links.style.border = "1px solid rgba(255,255,255,.1)"; links.style.borderRadius = "14px"; links.style.flexDirection = "column" };
document.querySelectorAll(".filters button").forEach(b => b.onclick = () => { document.querySelectorAll(".filters button").forEach(x => x.classList.remove("active")); b.classList.add("active"); document.querySelectorAll(".card").forEach(c => c.classList.toggle("hide", b.dataset.f !== "all" && c.dataset.c !== b.dataset.f)) });
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold: .08 }); document.querySelectorAll(".reveal").forEach(x => io.observe(x));
document.getElementById("form")?.addEventListener("submit", async e => { e.preventDefault(); const s = document.getElementById("status"); s.textContent = "Sending..."; try { let r = await fetch(e.target.action, { method: "POST", body: new FormData(e.target) }), d = await r.json(); s.textContent = d.message; if (d.ok) e.target.reset() } catch { x => s.textContent = "Please email me directly if PHP mail is not configured." } });
