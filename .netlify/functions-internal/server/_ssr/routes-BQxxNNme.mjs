import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Mail, c as FileBadge, d as ArrowRight, i as MessageSquareMore, l as Download, n as Users, o as Linkedin, r as Phone, s as Github, t as X, u as Award } from "../_libs/lucide-react.mjs";
import { t as esm_default } from "../_libs/emailjs__browser.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQxxNNme.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var somesh_default = "/assets/somesh-SITua8jp.png";
var Resume_default = "/assets/Resume-Jzzf8k7Z.pdf";
var EMAIL = "somesh.muttin@gmail.com";
var LINKEDIN = "https://www.linkedin.com/in/somesh-muttinkantimath/";
var GITHUB = "https://github.com/someshm17";
var EMAILJS_SERVICE_ID = "service_okm7yat";
var EMAILJS_TEMPLATE_ID = "template_124gib1";
var EMAILJS_PUBLIC_KEY = "ZleVuKoBND3Z2BWZ2";
var NAV = [
	["About", "#about"],
	["Skills", "#skills"],
	["Work", "#work"],
	["Services", "#services"],
	["Achievements", "#achievements"],
	["Contact", "#contact"]
];
function useReveal() {
	(0, import_react.useEffect)(() => {
		const io = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("in")), { threshold: .12 });
		document.querySelectorAll(".reveal").forEach((element) => io.observe(element));
		return () => io.disconnect();
	}, []);
}
function Socials({ vertical }) {
	const cls = "text-muted-foreground transition hover:-translate-y-0.5 hover:text-primary";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex ${vertical ? "flex-col gap-6" : "gap-5"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: LINKEDIN,
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "LinkedIn",
				className: cls,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
					size: 22,
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: GITHUB,
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "GitHub",
				className: cls,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
					size: 22,
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://mail.google.com/mail/u/0/#inbox?compose=new",
				target: "_blank",
				rel: "noreferrer",
				"aria-label": "Email",
				className: cls,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
					size: 22,
					strokeWidth: 1.5
				})
			})
		]
	});
}
function SectionRule() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-gradient-to-r from-primary/70 via-border to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-0.5 -top-[3.5px] h-2 w-2 rotate-45 bg-primary" })]
	});
}
function Section({ id, eyebrow, title, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: `mx-auto max-w-6xl px-6 pb-16 pt-4 md:px-10 md:pb-24 ${className ?? ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionRule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal mb-10 mt-12 md:mb-12 md:mt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-sm text-primary",
					children: eyebrow
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl md:text-5xl",
					children: title
				})]
			}),
			children
		]
	});
}
function Index() {
	useReveal();
	const formRef = (0, import_react.useRef)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		if (!formRef.current) return;
		setSending(true);
		setSent(false);
		setError(false);
		try {
			await esm_default.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY });
			setSent(true);
			formRef.current.reset();
		} catch (err) {
			console.error("EmailJS error:", err);
			setError(true);
		} finally {
			setSending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "absolute inset-x-0 top-0 z-30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center px-6 py-8 md:px-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#",
							className: "relative text-2xl font-medium tracking-wide",
							children: [
								"Somesh",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-2 right-0 h-1.5 w-1.5 rotate-45 bg-primary" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://mail.google.com/mail/u/0/#inbox?compose=new",
							target: "_blank",
							rel: "noreferrer",
							className: "ml-16 hidden text-sm hover:text-primary md:block",
							children: EMAIL
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(true),
							"aria-label": "Open menu",
							className: "group ml-auto flex flex-col items-end gap-1.5 p-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-0.5 w-8 bg-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-0.5 w-6 bg-foreground transition-all group-hover:w-8" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-0.5 w-7 bg-foreground" })
							]
						})
					]
				})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 flex flex-col bg-background/95 px-6 py-8 backdrop-blur md:px-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					"aria-label": "Close menu",
					className: "ml-auto p-2 hover:text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 30 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto mt-10 flex flex-col items-center gap-6",
					children: NAV.map(([label, href], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						onClick: () => setOpen(false),
						style: { animationDelay: `${index * 60}ms` },
						className: "animate-rise font-display text-4xl hover:text-primary md:text-6xl",
						children: label
					}, href))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-screen overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-x-0 bottom-0 top-8 flex justify-center md:-top-12 md:translate-x-[9%] lg:translate-x-[3%] xl:translate-x-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: somesh_default,
							alt: "Portrait of Somesh Muttinkantimath",
							className: "animate-portrait portrait-mask h-full max-h-[1000px] w-auto max-w-none object-cover object-top opacity-60 md:opacity-100"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-float absolute right-[22%] top-[10%] hidden lg:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 w-16 rounded-full border-[3px] border-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-2 -top-1 h-7 w-7 rounded-full border-[3px] border-primary" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-float absolute right-[7%] top-[17%] hidden h-9 w-9 rounded-full bg-accent [animation-delay:1.5s] lg:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-float absolute left-[4%] top-[72%] hidden h-2 w-2 rotate-45 bg-primary [animation-delay:3s] xl:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-start gap-10 px-6 pb-[14vh] pt-20 md:pt-[11vh] md:grid-cols-[1fr_1fr_1fr] md:px-16 lg:pt-[10vh]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "animate-rise",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "font-display text-5xl font-bold leading-[1.15] md:text-4xl lg:text-5xl xl:text-6xl",
										children: [
											"Hi,",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"I’m ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary",
												children: "Somesh"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary",
												children: "Muttinkantimath"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-2xl",
										children: "Software Developer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#work",
										className: "group mt-12 inline-flex items-center gap-4 rounded-md bg-primary py-1.5 pl-5 pr-1.5 text-primary-foreground shadow-[0_10px_30px_-10px_var(--primary)] transition hover:-translate-y-0.5",
										children: ["View My Work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded bg-primary-foreground/25 px-3 py-2 transition group-hover:translate-x-0.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "animate-rise [animation-delay:250ms]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-primary",
										children: "Expert on"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-2xl font-medium leading-snug md:text-xl lg:text-2xl xl:text-[1.7rem]",
										children: "Based in Bengaluru, India — I’m a full-stack & Java developer."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-7 leading-relaxed text-muted-foreground",
										children: "A Computer Science graduate and Software Developer focused on building practical, responsive applications and solving problems with clean, efficient solutions."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: Resume_default,
										download: "Somesh_Muttinkantimath_Resume.pdf",
										className: "mt-9 inline-flex items-center gap-1.5 border-b border-primary pb-1 text-primary transition hover:gap-2.5",
										children: ["Download Resume", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 })]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-10 left-6 z-10 flex items-end gap-16 md:left-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden md:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Socials, { vertical: true })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Socials, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: GITHUB,
								target: "_blank",
								rel: "noreferrer",
								className: "hidden items-center gap-3 text-sm hover:text-primary lg:flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-7 w-7 place-items-center rounded-full bg-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 14 })
								}), "github.com/someshm17"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "absolute bottom-10 right-6 z-10 flex items-center gap-3 text-sm hover:text-primary md:right-16",
						children: ["Let’s Chat", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareMore, { size: 30 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-signal" })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "about",
				eyebrow: "Who I am",
				title: "About Me",
				className: "pt-10 md:pt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-[1fr_2fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal space-y-6 border-l border-primary pl-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl",
							children: "B.Tech CSE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Presidency University, Bangalore"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl",
							children: "2022 – 2026"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-primary",
							children: "2026 Graduate"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal space-y-6 text-lg leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "I’m Somesh Muttinkantimath"
						}), ", a Computer Science graduate and Software Developer with a strong foundation in Java, DSA, OOP, and full-stack web development. I enjoy building responsive, practical applications."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "With experience in React, Node.js, Express, MongoDB, and SQL, along with AI integration, I’m passionate about learning, creating, and turning ideas into impactful technology." })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "skills",
				eyebrow: "Toolkit",
				title: "Skills",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
					children: [
						["Programming & CS", [
							"Java",
							"JavaScript",
							"DSA",
							"OOP"
						]],
						["Frontend", [
							"HTML",
							"CSS",
							"React.js"
						]],
						["Backend", ["Node.js", "Express.js"]],
						["Database", [
							"MongoDB",
							"MySQL",
							"SQL"
						]],
						["Tools", ["Git", "GitHub"]],
						["Development", ["Full-Stack Development", "AI Integration"]]
					].map(([group, items], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal group bg-background p-8 transition hover:bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-5 text-xs tracking-[0.2em] text-muted-foreground",
							children: [
								"0",
								index + 1,
								" —",
								" ",
								group.toUpperCase()
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-x-4 gap-y-2",
							children: items.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl transition group-hover:text-primary",
								children: skill
							}, skill))
						})]
					}, group))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "work",
				eyebrow: "Projects",
				title: "Selected Work",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-6",
					children: [
						{
							n: "GENAI — Generative AI Chatbot",
							s: "Full-Stack AI Chatbot",
							d: "A conversational AI interface with full-stack architecture, OpenAI integration and persistent chat history in a database.",
							t: "React.js · Node.js · Express.js · MongoDB · OpenAI API"
						},
						{
							n: "Digital-Legal Marketplace",
							s: "Full-Stack Legal Services Platform",
							d: "A full-stack platform connecting clients with lawyers through legal service discovery, lawyer matching, KYC, appointment scheduling, document management, verification, and payment workflows.",
							t: "React.js · Node.js · Express.js · REST APIs · Multer"
						},
						{
							n: "Patient Care System",
							s: "Healthcare Management Platform",
							d: "Manages health records, appointments and treatment tracking, with location-aware features.",
							t: "Java · React.js · MySQL · Geolocation API"
						}
					].map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "reveal group relative overflow-hidden rounded-lg border border-border p-8 transition hover:-translate-y-1 hover:border-primary/40 md:p-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-5xl text-muted-foreground/40",
									children: ["0", index + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl md:text-4xl",
										children: project.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-primary",
										children: project.s
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-2xl text-muted-foreground",
										children: project.d
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-sm tracking-wide text-foreground/80",
										children: project.t
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "hidden -rotate-45 text-muted-foreground transition group-hover:rotate-0 group-hover:text-primary md:block",
									size: 28
								})
							]
						})
					}, project.n))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "services",
				eyebrow: "Services",
				title: "What I Do",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border border-y border-border",
					children: [
						["Full-Stack Web Development", "Building complete web applications across frontend, backend, APIs, and databases."],
						["Frontend Development", "Responsive and interactive interfaces using React.js and modern web technologies."],
						["Backend Development", "Server-side applications and APIs using Node.js, Express.js, and Java."],
						["AI-Powered Applications", "Integrating AI APIs and intelligent functionality into practical applications."],
						["Java Software Development", "Building reliable software using Java, OOP, and strong problem-solving fundamentals."]
					].map(([title, description]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal group grid gap-3 py-8 transition hover:pl-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl transition group-hover:text-primary md:text-3xl",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: description
						})]
					}, title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "achievements",
				eyebrow: "Recognition & Leadership",
				title: "Achievements",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						{
							i: FileBadge,
							k: "Patent",
							t: "Automated Billing System",
							d: "Patent Application No. 202441075454"
						},
						{
							i: Award,
							k: "Competition",
							t: "Runners-Up — Anveshana 2025–26",
							d: "For JALSETU Smart Irrigation System"
						},
						{
							i: Users,
							k: "Leadership",
							t: "Social Media Head",
							d: "AeroDrone Club, Presidency University — content strategy, social media management, digital communication and team collaboration."
						}
					].map(({ i: Icon, k, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal rounded-lg border border-border p-8 transition hover:border-primary/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "text-accent",
								size: 26,
								strokeWidth: 1.5
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-primary",
								children: k
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl",
								children: t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: d
							})
						]
					}, k))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "contact",
				className: "relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-float absolute right-[8%] top-24 h-24 w-24 rounded-full border-[3px] border-accent/60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-6xl px-6 md:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionRule, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-12 md:grid-cols-2 md:px-10 md:pb-24 md:pt-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-3 text-sm text-primary",
									children: "Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-5xl leading-tight md:text-6xl",
									children: [
										"Let’s Build Something",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "Together."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `mailto:${EMAIL}`,
										className: "flex items-center gap-3 text-lg hover:text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 20 }), EMAIL]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "tel:+918867074560",
										className: "flex items-center gap-3 text-lg hover:text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 20 }), "+91 8867074560"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Socials, {})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							ref: formRef,
							onSubmit: submit,
							className: "reveal space-y-6",
							children: [
								[[
									"name",
									"Name",
									"text"
								], [
									"email",
									"Email",
									"email"
								]].map(([name, label, type]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name,
										type,
										maxLength: 120,
										className: "mt-2 w-full border-b border-input bg-transparent py-3 outline-none transition focus:border-primary"
									})]
								}, name)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: "Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										required: true,
										name: "message",
										rows: 4,
										maxLength: 2e3,
										className: "mt-2 w-full resize-none border-b border-input bg-transparent py-3 outline-none transition focus:border-primary"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: sending,
									className: "group inline-flex items-center gap-4 rounded-md bg-primary py-1.5 pl-5 pr-1.5 text-primary-foreground transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60",
									children: [sending ? "Sending..." : "Send Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-primary-foreground/25 px-3 py-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })
									})]
								}),
								sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-accent",
									children: "Message sent successfully! I’ll get back to you soon."
								}),
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-destructive",
									children: "Something went wrong. Please try again or email me directly."
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-6 md:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionRule, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Somesh Muttinkantimath"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Software Developer · Full-Stack Developer · AI Enthusiast"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Socials, {})]
			})] })
		]
	});
}
//#endregion
export { Index as component };
