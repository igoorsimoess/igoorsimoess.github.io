import type { Language } from "@/lib/language";

export const introductionByLanguage: Record<Language, readonly string[]> = {
	en: [
		"Hi, I’m Igor Simões, from Parahyba, Brazil, where the sun rises first in all Americas.",
		"I’m a SWE focused on Distributed Systems and AI Engineering. I’ve been helping early stage startups scale and get to a solid state.",
		"Interested in Applied Economics for Social Inequality, I’m researching underlying factors in Public Resource Allocation for Education using Multi-Agent Reinforcement Learning based in Game Theory Modeling.",
		"Deeply passionate about sailing, cars and photography.",
	],
	"pt-br": [
		"Olá, sou Igor Simões, da Parahyba, Brasil, onde o sol nasce primeiro em todas as Américas.",
		"Sou engenheiro de software com foco em Sistemas Distribuídos e Engenharia de IA. Tenho ajudado startups em estágio inicial a escalar e alcançar uma base sólida.",
		"Interessado em Economia Aplicada para a Desigualdade Social, pesquiso fatores relacionados à alocação de recursos públicos para a educação usando Aprendizado por Reforço Multiagente baseado em Modelagem de Teoria dos Jogos.",
		"Apaixonado por vela, carros e fotografia.",
	],
	fr: [
		"Bonjour, je suis Igor Simões, de Parahyba, au Brésil, où le soleil se lève en premier dans toutes les Amériques.",
		"Je suis ingénieur logiciel spécialisé dans les systèmes distribués et l’ingénierie de l’IA. J’aide des startups en phase de démarrage à évoluer et à construire des bases solides.",
		"Je m’intéresse à l’économie appliquée aux inégalités sociales et je cherche à comprendre les facteurs qui influencent l’allocation des ressources publiques à l’éducation, grâce à l’apprentissage par renforcement multi-agents et à la théorie des jeux.",
		"Je suis passionné par la voile, les voitures et la photographie.",
	],
};
