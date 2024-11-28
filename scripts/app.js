class AnimalTable {
    constructor(tableId, data, sortableFields, nameStyle) {
        this.tableId = tableId;
        this.sortableFields = sortableFields;
        this.nameStyle = nameStyle;

        const storedData = localStorage.getItem(this.tableId);
        this.data = storedData ? JSON.parse(storedData) : data;
    }

    saveToLocalStorage() {
        localStorage.setItem(this.tableId, JSON.stringify(this.data));
    }

    render() {
        const tableContainer = document.getElementById(this.tableId);
        tableContainer.innerHTML = `
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              ${Object.keys(this.data[0]).map(
            (key) =>
                `<th>${this.sortableFields.includes(key) ? `<button onclick="${this.tableId}.sort('${key}')">${key}</button>` : key}</th>`
        ).join('')}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${this.data.map((row, index) =>
            `<tr>
                ${Object.keys(row).map((key) =>
                key === 'image'
                    ? `<td><img src="${row[key]}" alt="${row.name}" width="100" /></td>`
                    : `<td class="${key === 'name' ? this.nameStyle : ''}">${row[key]}</td>`
            ).join('')}
                <td>
                  <button class="btn btn-primary btn-sm" onclick="${this.tableId}.edit(${index})">Edit</button>
                  <button class="btn btn-danger btn-sm" onclick="${this.tableId}.delete(${index})">Delete</button>
                </td>
              </tr>`
        ).join('')}
          </tbody>
        </table>
        <button class="btn btn-success" onclick="${this.tableId}.add()">Add Animal</button>
      `;
    }

    sort(field) {
        this.data.sort((a, b) => (a[field] > b[field] ? 1 : -1));
        this.saveToLocalStorage();
        this.render();
    }

    add() {
        const name = prompt("Enter Animal Name:");
        const size = parseFloat(prompt("Enter Size:"));
        const location = prompt("Enter Location:");
        const image = prompt("Enter Image URL:") || "assets/defaultImage.jpg";

        if (this.data.some((item) => item.name === name)) {
            alert("Duplicate entry!");
            return;
        }
        if (isNaN(size)) {
            alert("Invalid size!");
            return;
        }

        let species;
        if (this.tableId === "table1") {
            species = "Big Cats";
        } else if (this.tableId === "table2") {
            species = "Dog";
        } else if (this.tableId === "table3") {
            species = "Big Fish";
        } else {
            species = "Unknown";
        }
        this.data.push({ species, name, size, location, image });
        this.saveToLocalStorage();
        this.render();
    }

    edit(index) {
        const row = this.data[index];
        const name = prompt("Edit Name:", row.name);
        const size = parseFloat(prompt("Edit Size:", row.size));
        const location = prompt("Edit Location:", row.location);
        const image = prompt("Edit Image URL:", row.image);

        if (isNaN(size)) {
            alert("Invalid size!");
            return;
        }
        this.data[index] = { ...row, name, size, location, image };
        this.saveToLocalStorage();
        this.render();
    }

    delete(index) {
        this.data.splice(index, 1);
        this.saveToLocalStorage();
        this.render();
    }
}


fetch("data/bigCats.json")
    .then((res) => res.json())
    .then((data) => {
        window.table1 = new AnimalTable("table1", data, ["name", "size", "location"], "");
        table1.render();
    });

fetch("data/dogs.json")
    .then((res) => res.json())
    .then((data) => {
        window.table2 = new AnimalTable("table2", data, ["name", "location"], "bold");
        table2.render();
    });

fetch("data/bigFish.json")
    .then((res) => res.json())
    .then((data) => {
        window.table3 = new AnimalTable("table3", data, ["size"], "bold-italic-blue");
        table3.render();
    });
