function solve() {
	let title = document.getElementById("createTitle").value;
	let text = document.getElementById("createContent").value;
	console.log(title);
	console.log(text);
	if (!title || !text)
	{
		return;
	}
	let createTitle = document.createElement("h3");
	createTitle.textContent = title;
	let createContent = document.createElement("p");
	createContent.textContent = text;

	let article = document.createElement("article");
	article.appendChild(createTitle);
	article.appendChild(createContent);
	let articlesWrapper = document.getElementById("articles");
	articlesWrapper.appendChild(article);

	document.querySelector("#createTitle").value = "";
	document.querySelector("#createContent").value = "";

}