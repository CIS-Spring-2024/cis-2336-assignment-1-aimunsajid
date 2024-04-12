document.addEventListener('DOMContentLoaded', function() {
    const menu = {
        entrees: [
            { name: 'Grilled Chicken', description: 'With a side of quinoa salad.', image: 'grilledchickenquinoasalad.jpg' },
            { name: 'Pasta Primavera', description: 'Fresh veggies and penne pasta.', image: 'pasta primavera.jpg' },
            { name: 'Chicken Sandwich', description: 'Juicy grilled chicken on a toasted bun.', image: 'cfa.jpg' },
            { name: 'Chicken Nuggets and French Fries', description: 'Crispy outside, juicy inside.', image: 'chicken nuggest and fries.jpg' },
            { name: 'Nachos', description: 'Loaded with cheese and jalapeños.', image: 'nachos.jpg' },
            { name: 'Burger with Fries', description: 'Classic beef burger served with fries.', image: 'burger-fries.jpg' },
            { name: 'Pizza', description: 'Classic Margherita with a crispy crust.', image: 'pizza.jpg' },
            { name: 'Veggie Burrito', description: 'Filled with beans, rice, and vegetables.', image: 'veggie burrito.jpg' }
        ],
        desserts: [
            { name: 'Cheesecake', description: 'Rich, creamy, and utterly delicious.', image: 'cheesecake.jpg' },
            { name: 'Chocolate Brownie', description: 'Decadent and fudgy.', image: 'chocolate brownie.jpg' },
            { name: 'Chocolate Chip Cookie', description: 'Warm, gooey, and filled with chocolate chips.', image: 'chocchipcookies.jpg' }
        ],
        drinks: [
            { name: 'Coffee', description: 'Freshly brewed, to kickstart your day.', image: 'coffee.jpg' },
            { name: 'Matcha', description: 'Chilled, frothy matcha delight, perfectly blended', image: 'matcha.jpg' },
            { name: 'Fruit Smoothie', description: 'Made with real fruit and low-fat yogurt.', image: 'fruit smoothie.jpg' },
            { name: 'Soda', description: 'A variety of flavored carbonated beverages.', image: 'soda.jpg' },
            { name: 'Water', description: 'Chilled and refreshing.', image: 'water.jpg' }
        
        ]
    };

    // Clear the existing sections to avoid duplication
    document.querySelectorAll('.menu-section').forEach(section => section.innerHTML = '');

    Object.keys(menu).forEach(section => {
        const sectionDiv = document.getElementById(section);
        const heading = document.createElement('h2');
        heading.textContent = section.charAt(0).toUpperCase() + section.slice(1);
        sectionDiv.appendChild(heading);

        menu[section].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.width = 200;
            img.height = 200;
            itemDiv.appendChild(img);

            const name = document.createElement('h3');
            name.textContent = item.name;
            itemDiv.appendChild(name);

            const description = document.createElement('p');
            description.textContent = item.description;
            itemDiv.appendChild(description);

            sectionDiv.appendChild(itemDiv);
        });
    });
});
