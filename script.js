// Sample data including outfit names for each year
const data = {
    name: "Jumpsuits",
    children: [
        { name: "1969", value: 10 },
        { name: "1970", value: 12 },
        { name: "1971", value: 15 },
        { name: "1972", value: 22 },
        { name: "1973", value: 18 },
        { name: "1974", value: 30 },
        { name: "1975", value: 15 },
        { name: "1976", value: 8 },
        { name: "1977", value: 6 }
    ] 
};

// Outfit details with images for each year
const outfits = {
    1969: [
        { name: "Black Cossack Top Two-piece", image: "Black Crossack 1969.jpg" },
        { name: "Black Cossack Top Two-piece (2)", image: "Black Cossack Top Two-piece (2).jpg" },
        { name: "Blue navy cossack top Two-piece", image: "Blue navy cossack top Two-piece.jpg"},
        { name: "Black Two-piece (first version)", image: "Black Two-piece (first version).jpg" },
        { name: "Black Two-piece (second version)", image: "Black Two-piece (second version).jpg" },
        { name: "White Leather Two-piece", image: "White Leather Two-piece.jpg" },
        { name: "Brown Two-piece", image: "Brown Two-piece.jpg" },
        
       


        
    ],
    1970: [
        { name: "White Cossack Top Jumpsuit", image: "White Cossack Top Jumpsuit.jpg" },
        { name: "Black Brocade Suit with red unicorns", image: "Black Brocade Suit with red unicorns.jpg" },
        { name: "Black Brocade Suit with Gold Trim", image: "Black Brocade Suit with Gold Trim.jpg" },
        { name: "Blue Brocade Suit", image: "Blue Brocade Suit.jpg" },
        { name: "White Brocade Suit with Silver Trim", image: "White Brocade Suit with Silver Trim.jpg" },
        { name: "White Brocade Suit with Orange Trim", image: "White Brocade Suit with Orange Trim.jpg" },
        { name: "Thin Green Leaf", image: "Thin Green Leaf.jpg" },
        { name: "Fringe Suit", image: "Fringe Suit.jpg" },
        { name: "Conchos Suit", image: "Conchos Suit.jpg" },
        { name: "Chain Suit", image: "Chain Suit.jpg" },
        { name: "Red Ladder", image: "Red Ladder.jpg" },
        { name: "Metal Eye Suit", image: "Metal Eye Suit.jpg" },
        { name: "Nail Swirl", image: "Nail Swirl.jpg" },
        { name: "Lace Suit", image: "Lace Suit.jpg" },
        { name: "Wing Suit", image: "Wing Suit.jpg" },
        

       
        
    ],
    1971: [
        { name: "Turquoise Concho", image: "Turquoise Concho.jpg" },
        { name: "Knot Suit", image: "Knot Suit.jpg" },
        { name: "Tassel Star", image: "Tassel Star.jpg" },
        { name: "White Nail Suit", image: "White Nail Suit.jpg" },
        { name: "Cobweb suit", image: "Cobweb suit.jpg" },
        { name: "Light Blue Cobweb 2-piece", image: "Light Blue Cobweb 2-piece.jpg" },
        { name: "White Cisco Kid Two-piece with black shoulders", image: "White Cisco Kid Two-piece with black shoulders.jpg" },
        { name: "Black Cisco Kid Two-piece with red shoulders", image: "Black Cisco Kid Two-piece with red shoulders.jpg" },
        { name: "Violet Cisco Kid Two-piece, with mid-blue shoulders", image: "Violet Cisco Kid Two-piece, with mid-blue shoulders.jpg" },
        { name: "Black Cisco Kid Jumpsuit, with green shoulders", image: "Black Cisco Kid Jumpsuit, with green shoulders.jpg" },
        { name: "Black Cisco Kid Jumpsuit with red shoulders", image: "Black Cisco Kid Jumpsuit with red shoulders.jpg" },
        { name: "Black Cisco Kid Jumpsuit with light blue shoulders", image: "Black Cisco Kid Jumpsuit with light blue shoulders.jpg" },
        { name: "White Cisco Kid Jumpsuit with black leather shoulders", image: "White Cisco Kid Jumpsuit with black leather shoulders.jpg" },
        { name: "Black Fireworks", image: "Black Fireworks.jpg" },
        { name: "White Fireworks", image: "White Fireworks.jpg" },
        { name: "White Pinwheel", image: "White Pinwheel.jpg" },
        {name: "Black Pinwheel", image: "Black Pinwheel.jpg" },
        {name: "Snowflake", image: "Snowflake.jpg" },

    ],
    1972: [
        { name: "Black Butterfly", image: "Black Butterfly.jpg" },
        { name: "Blue Nail", image: "Blue Nail.jpg" },
        { name: "Red Pinwheel", image: "Red Pinwheel.jpg" },
        { name: "Royal Blue Fireworks", image: "Royal Blue Fireworks.jpg" },
        { name: "White Pinwheel", image: "White Pinwheel.jpg" },
        { name: "White Fireworks", image: "White Fireworks.jpg" },
        {name: "Snowflake", image: "Snowflake.jpg" }, 
        {name: "White Pyramid", image: "White Pyramid.jpg" },
        {name: "Adonis Suit", image: "Adonis Suit.jpg" },
        {name: "Wheat suit", image: "Wheat suit.jpg" },
        {name: "Eyelet Suit", image: "Eyelet Suit.jpg" },
        {name: "Lucky Suit", image: "Lucky Suit.jpg" },
        {name: "White Two-piece (color flap pockets)", image: "White Two-piece (color flap pockets).jpg" },
        {name: "White Two piece", image: "White Two piece.jpg" }, 
        {name: "White Turquoise Concho Two-piece", image: "White Turquoise Concho Two-piece.jpg" },
        {name: "Light Blue Paisley Two-piece", image: "Light Blue Paisley Two-piece.jpg" },
        {name: "Thunderbird", image: "Thunderbird.jpg" },
        {name: "Black Conquistador", image: "Black Conquistador.jpg" },
        {name: "Aztec Star", image: "Aztec Star.jpg" },
        {name: "Saturn", image: "Saturn.jpg" },
    ],



    1973: [
            { name: "American Eagle", image: "American Eagle.jpg" },
            { name: "Pharao Suit", image: "Pharao Suit.jpg" },
            { name: "Orange Sunburst", image: "Orange Sunburst.jpg" },
            { name: "Blue Rain", image: "Blue Rain.jpg" },
            { name: "Multi Coloured Rain", image: "Multi Coloured Rain.jpg" },
            { name: "Blue Pinwheel", image: "Blue Pinwheel.jpg" },
            {name: "Thunderbird", image: "Thunderbird.jpg" },
            { name: "Fire Suit", image: "Fire Suit.jpg" },
            { name: "1973 Snowflake", image: "1973 Snowflake.jpg" },
            { name: "Nail Studded Suit", image: "Nail Studded Suit.jpg" },
            {name: "Lucky Suit", image: "Lucky Suit.jpg" },
            { name: "White Spanish Flower", image: "White Spanish Flower.jpg" },
            { name: "Blue Starburst", image: "Blue Starburst.jpg" },
            { name: "Aqua Blue Vine", image: "Aqua Blue Vine.jpg" },
            { name: "1973 Arabian", image: "1973 Arabian.jpg" },
            { name: "Black Spanish Flower", image: "Black Spanish Flower.jpg" },
            { name: "Lava Suit", image: "Lava Suit.jpg" },
    ],

    1974: [
        { name: "Nail Mirrored Suit", image: "Nail Mirrored Suit.jpg" },
        { name: "Gold Vine", image: "Gold Vine.jpg" },
        { name: "White Spanish Flower", image: "White Spanish Flower.jpg" },
        { name: "White Conquistador", image: "White Conquistador.jpg" },
        { name: "American Eagle", image: "American Eagle.jpg" },
        { name: "Blue Starburst", image: "Blue Starburst.jpg" },
        { name: "Orange Sunburst", image: "Orange Sunburst.jpg" },
        { name: "1973 Arabian", image: "1973 Arabian.jpg" },
        { name: "Aqua Blue Vine", image: "Aqua Blue Vine.jpg" },
        { name: "Fire Suit", image: "Fire Suit.jpg" },
        { name: "Blue Swirl", image: "Blue Swirl.jpg" },
        { name: "Peacock", image: "Peacock.jpg" },
        { name: "1974 American Eagle", image: "1974 American Eagle.jpg" },
        { name: "Turquoise Phoenix", image: "Turquoise Phoenix.jpg" },
        { name: "Egyptian", image: "Egyptian.jpg" },
        { name: "Plain Beige Leather Two-piece", image: "Plain Beige Leather Two-piece.jpg" },
        { name: "Mermaid or Nymph Beige Leather Two Piece", image: "Mermaid or Nymph Beige Leather Two Piece.jpg" },
        { name: "Emperor Beige Leather Two-piece", image: "Emperor Beige Leather Two-piece.jpg" },
        { name: "Rainfall Beige Leather Two-piece", image: "Rainfall Beige Leather Two-piece.jpg" },
        { name: "Two-toned Wine Glass Leather Two-piece", image: "Two-toned Wine Glass Leather Two-piece.jpg" },
        { name: "Mad Tiger", image: "Mad Tiger.jpg" },
        { name: "Black Spanish Flower with red stones", image: "Black Spanish Flower with red stones.jpg" },
        { name: "Chinese Dragon", image: "Chinese Dragon.jpg" },
        { name: "1974 Arabian", image: "1974 Arabian.jpg" },
        { name: "Mexican Sundial", image: "Mexican Sundial.jpg" },
    ],

    1975: [
        { name: "White-Leather Two-piece", image: "White-Leather Two-piece.jpg" },
        { name: "Navy Blue Two-piece with blue armadilo", image: "Navy Blue Two-piece with blue armadilo.jpg" },
        { name: "Red Two-piece with armadilo", image: "Red Two-piece with armadilo.jpg" },
        { name: "Navy Blue Two-piece with snake design", image: "Navy Blue Two-piece with snake design.jpg" },
        { name: "Navy Blue Two-piece with multi colored arrows", image: "Navy Blue Two-piece with multi colored arrows.jpg" },
        { name: "White Two-piece blue shoulder", image: "White Two-piece blue shoulder.jpg" },
        { name: "Navy Blue Two-piece with colourful flames", image: "Navy Blue Two-piece with colourful flames.jpg" },
        { name: "Silver Phoenix", image: "Silver Phoenix.jpg" },
        { name: "Chief", image: "Chief.jpg" },
        { name: "Red Phoenix Suit", image: "Red Phoenix Suit.jpg" },
        { name: "Black Phoenix Suit", image: "Black Phoenix Suit.jpg" },
        { name: "Totem Pole", image: "Totem Pole.jpg" },
        { name: "Chicken Bone", image: "Chicken Bone.jpg" },
        { name: "Penguin suit", image: "Penguin suit.jpg" },
        { name: "V-Neck", image: "V-Neck.jpg" },
        { name: "White Egyptian Bird", image: "White Egyptian Bird.jpg" },
        { name: "Rainfall", image: "Rainfall.jpg" },
        { name: "Blue Egyptian Bird", image: "Blue Egyptian Bird.jpg" },


    ],
    1976: [
        { name: "Silver Phoenix", image: "Silver Phoenix.jpg" },
        { name: "V-Neck", image: "V-Neck.jpg" },
        { name: "White Egyptian Bird", image: "White Egyptian Bird.jpg" },
        { name: "Blue Egyptian Bird", image: "Blue Egyptian Bird.jpg" },
        { name: "Rainfall", image: "Rainfall.jpg" },
        { name: "Chicken Bone", image: "Chicken Bone.jpg" },
        { name: "Chief", image: "Chief.jpg" },
        { name: "Red Phoenix Suit", image: "Red Phoenix Suit.jpg" },
        { name: "Egyptian", image: "Egyptian.jpg" },
        { name: "Blue Swirl", image: "Blue Swirl.jpg" },
        { name: "Colorful Flame Suit", image: "Colorful Flame Suit.jpg" },
        { name: "1974 Arabian", image: "1974 Arabian.jpg" },
        { name: "Black Phoenix Suit", image: "Black Phoenix Suit.jpg" },

    ],

    1977: [
        { name: "Silver Phoenix", image: "Silver Phoenix.jpg" },
        { name: "Chief", image: "Chief.jpg" },
        { name: "Rainfall", image: "Rainfall.jpg" },
        { name: "Mexican Sundial", image: "Mexican Sundial.jpg" },
        { name: "1974 Arabian", image: "1974 Arabian.jpg" },
    ],

};




// Dimensions
const width = 800;
const height = 600;

// SVG container
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("font-family", "Arial");

// Tooltip
const tooltip = d3.select("#tooltip");

// Outfit display
const outfitDisplay = document.getElementById("outfitDisplay");
const yearTitle = document.getElementById("yearTitle");
const outfitImagesContainer = document.getElementById("outfitImages");


// Root hierarchy and layout
const root = d3.hierarchy(data).sum(d => d.value);

d3.treemap()
    .size([width, height])
    .padding(1)(root);

// Create nodes
const nodes = svg.selectAll("g")
    .data(root.leaves())
    .enter()
    .append("g")
    .attr("transform", d => `translate(${d.x0},${d.y0})`);

// Rectangles
// Rectangles
nodes.append("rect")
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .attr("fill", d => {
        const jumpsuitCount = outfits[d.data.name] ? outfits[d.data.name].length : 0; // Get the number of outfits for the year
        const colorIntensity = d3.scaleLinear()
            .domain([0, 20]) // 0 is the lowest number of outfits, 20 is the highest
            .range([0.3, 1]); // Adjust this range to get the desired color intensity

        return d3.interpolateBlues(colorIntensity(jumpsuitCount)); // Use the scale for dynamic color
    })
    .style("stroke", "white")
    .on("mousemove", (event, d) => {
        const year = d.data.name;
        const jumpsuitCount = outfits[year] ? outfits[year].length : 0; // Get the number of jumpsuits for the year
        
        tooltip.style("opacity", 1)
            .html(`Year: <strong>${year}</strong><br>Jumpsuit Count: <strong>${jumpsuitCount}</strong>`)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY + 10) + "px");
    })
    .on("mouseleave", () => {
        tooltip.style("opacity", 0);
    })
    .on("click", (event, d) => {
        showOutfits(d.data.name);
    });



    
// Labels
// Add labels inside the boxes
nodes.append("text")
    .attr("x", 20)
    .attr("y", 40) // Adjust vertical position for better alignment
    .text(d => d.data.name) // Set the text to the year's name
    .attr("font-size", "25px") // Set the font size
    .attr("font-weight", "bold") // Make it bold
    .attr("fill", "beige") // Set the text color
    .attr("text-anchor", "start"); // Align text to the left

    nodes.append("text")
    .attr("x", d => (d.x1 - d.x0) - 10) // Adjust X position
    .attr("y", d => (d.y1 - d.y0) - 15) // Adjust Y position (slightly above the bottom)
    .text(d => `Outfits: ${outfits[d.data.name] ? outfits[d.data.name].length : 0}`) 
    .attr("font-size", "12px") 
    .attr("font-weight", "200") 
    .attr("fill", "white") 
    .attr("text-anchor", "end") 
    .style("font-family", "'Montserrat', sans-serif");

// Function to show outfits
function showOutfits(year) {
    yearTitle.textContent = `Outfits from ${year}`;
    outfitImagesContainer.innerHTML = "";

    if (outfits[year]) {
        outfits[year].forEach(outfit => {
            const outfitDiv = document.createElement("div");
            const imgElement = document.createElement("img");
            const nameElement = document.createElement("p");

            imgElement.src = `images/${outfit.image}`;
            imgElement.alt = outfit.name;
            nameElement.textContent = outfit.name;

            outfitDiv.appendChild(imgElement);
            outfitDiv.appendChild(nameElement);
            outfitImagesContainer.appendChild(outfitDiv);
        });
    }

    outfitDisplay.classList.remove("hidden");
    
}


