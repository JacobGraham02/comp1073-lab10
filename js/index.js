/* STEP 2: Bind the HEADER and the SECTION elements above to variables */
	
	const header = document.querySelector("header");
	const section = document.querySelector("section");
		/* STEP 3: Store the URL of a JSON file in a variable */
		let requestURL = "https://github.com/JacobGraham02/comp1073-lab10/blob/main/js/i-scream.json";

		// let requestURL = "https://jacobgraham02.github.io/Lesson10-comp1073/js/i-scream.json";
		
		console.log(requestURL);
		/* STEP 4: Create a new XHR object */
		let request = new XMLHttpRequest();

		/* STEP 5: Open a new request using the request() method */
		request.open("GET", requestURL);

		/* STEP 6: Set JavaScript to accept JSON from the server */
		request.responseType = "json";

		/* STEP 7: Send the request with the send() method */
		//ttt.send();
		request.send();

		/* STEP 8: Add an event handler that listens for the onload event of the JSON file/object */
		request.onload = function() {
			let iScreamInc = request.response;
			console.log(iScreamInc);
			populateHeader(iScreamInc);
			showTopFlavours(iScreamInc);
		}

		function populateHeader(jsonObj) {
			let headerH1 = document.createElement("h1");
			headerH1.textContent = jsonObj["companyName"];
			header.appendChild(headerH1);
		}

		function showTopFlavours(jsonObj) {
		/* STEP 10a: Assemble the showTopFlavors() function */
			let topFlavours = jsonObj["topFlavors"];

			// STEP 10b: Bind the JSON topFlavors object to a var

			// STEP 10c: Loop through the topFlavors object
			for (let i = 0; i < topFlavours.length; i++) {
				let article = document.createElement("article");
				let h2 = document.createElement("h2");
				let image = document.createElement("img");
				let p1 = document.createElement("p");
				let p2 = document.createElement("p");
				let list = document.createElement("ul");

				// STEP 10d: build HTML elements for the content

				// STEP 10e: Set the textContent property for each of the above elements (except the UL), based on the JSON content
				h2.textContent = topFlavours[i]["name"];

				image.setAttribute("src", "../images/" + topFlavours[i]["image"]);
				image.setAttribute("height", 300);
				// STEP 10f: Build a loop for the ingredients array in the JSON
				p1.textContent = "dessert type: " + topFlavours[i]["type"];
				p2.textContent = "calories: " + topFlavours[i]["calories"];

				let ingredients = topFlavours[i]["ingredients"];
				for (let j = 0; j < ingredients.length; j++) {
					let listItem = document.createElement("li");
					listItem.textContent = ingredients[j];
					// Add ingredient to the ul
					list.appendChild(listItem);
				
			}
				// STEP 10g: Append each of the above HTML elements to the ARTICLE element
				article.appendChild(h2);
				article.appendChild(image);
				article.appendChild(p1);
				article.appendChild(p2);
				article.appendChild(list);
				
				// STEP 10h: Append each complete ARTICLE element to the SECTION element
				section.appendChild(article);
		}

		/* STEP 11: Change the URL in step 3 to point to the JSON file in the local /js folder */


		// STEP 12: Add a 3rd flavour of ice cream to the local JSON file, making use of the /images/strawberry-sprinkle.svg image


		// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

	}

		// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations