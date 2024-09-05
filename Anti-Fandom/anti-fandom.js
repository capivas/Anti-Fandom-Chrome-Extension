chrome.webNavigation.onCommitted.addListener((details) => {
	let url = new URL(details.url);

	if (url.hostname.endsWith(".fandom.com")) {
		let nomeWiki = url.hostname.split('.')[0];
		let urlNovo = `${url.protocol}//antifandom.com/${nomeWiki}${url.pathname}${url.search}${url.hash}`;

		if (details.url !== urlNovo) {
			chrome.tabs.update(details.tabId, {url: urlNovo}).then(retorno => console.log(retorno));
		}
	}
}, { url: [{ hostContains: '.fandom.com' }] });