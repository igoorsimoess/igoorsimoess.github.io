"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { introductionByLanguage } from "@/content/introduction";
import { getServerLanguageSnapshot, getLanguageSnapshot, setLanguage, subscribeToLanguage } from "@/lib/language";
import { getServerThemeSnapshot, getThemeSnapshot, setTheme, subscribeToTheme } from "@/lib/theme";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { LanguageSwitch } from "@/components/ui/language-switch";
import { Switch } from "@/components/ui/switch";

function SunIcon() {
	return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

function MoonIcon() {
	return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M20.1 15.4A8.5 8.5 0 0 1 8.6 3.9 8.5 8.5 0 1 0 20.1 15.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>;
}

function GitHubIcon() {
	return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.21.65-.46v-1.68c-2.65.58-3.21-1.28-3.21-1.28-.44-1.13-1.08-1.43-1.08-1.43-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .87 1.48 2.28 1.05 2.84.8.09-.62.34-1.05.62-1.29-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.88.99-2.54-.1-.24-.43-1.2.09-2.5 0 0 .81-.26 2.62.97A9.1 9.1 0 0 1 12 6.98c.82 0 1.64.11 2.4.32 1.81-1.23 2.62-.97 2.62-.97.52 1.3.19 2.26.09 2.5.62.66.99 1.5.99 2.54 0 3.67-2.24 4.48-4.37 4.72.35.3.66.88.66 1.78v2.64c0 .25.17.55.66.46A9.5 9.5 0 0 0 12 2.5Z" /></svg>;
}

function LinkedInIcon() {
	return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M5.17 7.44a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36ZM3.7 9h2.94v9.42H3.7V9Zm4.79 0h2.82v1.29h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.52 1.95 3.52 4.48v5.17h-2.94v-4.58c0-1.09-.02-2.5-1.53-2.5-1.53 0-1.76 1.2-1.76 2.42v4.66H8.49V9Z" /></svg>;
}

function GmailIcon() {
	return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M3.5 6.5 12 13l8.5-6.5v11.25a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75V6.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="m3.5 6.5 2.75-2.25h11.5l2.75 2.25" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>;
}

export function PortfolioPage() {
	const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);
	const language = useSyncExternalStore(subscribeToLanguage, getLanguageSnapshot, getServerLanguageSnapshot);
	const portraitSource = theme === "light" ? "/pfp_light.jpeg" : "/pfp_dark.jpeg";
	const introduction = introductionByLanguage[language];

	return (
		<div className="site-shell" data-theme={theme} id="home" lang={language === "pt-br" ? "pt-BR" : language}>
			<div className="portfolio-card">
				<header className="site-header">
					<nav className="main-nav" aria-label="Main navigation">
						<a href="#home">Home</a><span className="nav-disabled" aria-disabled="true">Blog</span><span className="nav-disabled" aria-disabled="true">Projects</span><span className="nav-disabled" aria-disabled="true">List 100</span><span className="nav-disabled" aria-disabled="true">Research</span><span className="nav-disabled" aria-disabled="true">Stuff I&apos;m into</span>
					</nav>
					<div className="theme-control">
						<LanguageSwitch value={language} onChange={setLanguage} />
						<span className="theme-indicator" aria-label={`Current theme: ${theme}`} title={`Current theme: ${theme}`}>{theme === "light" ? <SunIcon /> : <MoonIcon />}</span>
						<Switch checked={theme === "light"} aria-label="Toggle light theme" onCheckedChange={(checked) => setTheme(checked ? "light" : "dark")} />
					</div>
				</header>

				<main className="portfolio-content">
					<section className="intro-layout" aria-labelledby="intro-title">
						<div className="intro-copy">
							<h1 id="intro-title" className="visually-hidden">Igor Simões</h1>
							{introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
						</div>

						<div className="portrait-wrap" aria-label="Portrait of Igor Simões">
							<div className="portrait-photo"><Image src={portraitSource} alt="Igor Simões" fill className="portrait-image" priority sizes="(max-width: 720px) 200px, 280px" unoptimized /></div>
							<div className="portrait-lines" aria-hidden="true">
								<div className="portrait-line portrait-line-main" />
								<div className="portrait-line portrait-line-before" />
								<div className="portrait-line portrait-line-after" />
							</div>
						</div>
					</section>

					<div className="quick-links" aria-label="Contact and company links">
						<a className="icon-button" href="https://www.linkedin.com/in/igorssimoes" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
						<a className="icon-button" href="https://github.com/igoorsimoess" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
						<a className="icon-button" href="mailto:igor.s.simoes@gmail.com" aria-label="Email Igor Simões"><GmailIcon /></a>
						<a className="icon-button peacore-button" href="https://peacore.com.br/" target="_blank" rel="noreferrer" aria-label="Peacore"><span className="peacore-logo" aria-hidden="true" /></a>
						<Drawer swipeDirection="right">
							<DrawerTrigger render={<a className="icon-button" href="#resume" aria-label="Open résumé" />}>cv</DrawerTrigger>
							<DrawerContent>
								<div className="resume-drawer-header">
									<div>
										<DrawerTitle>Résumé</DrawerTitle>
										<DrawerDescription>Igor Simões — Software Engineer</DrawerDescription>
									</div>
									<DrawerClose className="resume-drawer-close" aria-label="Close résumé">×</DrawerClose>
								</div>
								<iframe className="resume-frame" src="/resume.pdf#view=FitH" title="Igor Simões résumé" />
							</DrawerContent>
						</Drawer>
					</div>
				</main>
			</div>
		</div>
	);
}
