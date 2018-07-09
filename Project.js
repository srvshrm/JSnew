let counter = 1
let countryIds = new Set()

function createElement(element, attribute, inner) {
    if (typeof(element) === "undefined") {
      return false;
    }
    if (typeof(inner) === "undefined") {
      inner = "";
    }
    let el = document.createElement(element);
    if (typeof(attribute) === 'object') {
      for (let key in attribute) {
        el.setAttribute(key, attribute[key]);
      }
    }
    if (!Array.isArray(inner)) {
      inner = [inner];
    }
    for (let k = 0; k < inner.length; k++) {
      if (inner[k].tagName) {
        el.appendChild(inner[k]);
      } else {
        el.appendChild(document.createTextNode(inner[k]));
      }
    }
    return el;
  }

function addCountry()
{
    let countryId = document.getElementById('countryId').value
    let countryName = document.getElementById('countryName').value
    let population = document.getElementById('population').value

	let countryList = document.getElementById('countryList')
	
	if(countryIds.has(countryId)) {

	}
	else
		countryIds.add(countryId)

	let btn = createElement("button",{"id":counter,"class":"btn btn-danger","onclick":"removeCountry(id)"},"Remove")

    let tr = createElement("tr",{"id":`country${counter++}`},[createElement("td",{},countryId),
	createElement("td",{},countryName),createElement("td",{},population),createElement("td",{},btn)])

	countryList.appendChild(tr)
}

function removeCountry(id)
{
	let countryList = document.getElementById('countryList')
	let country = document.getElementById(`country${id}`)
	countryList.removeChild(country)
}