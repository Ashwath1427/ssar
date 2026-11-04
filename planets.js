window.PLANETS = {
 Sun:{type:'Star',distance:'At the center',year:'—',fact:'The Sun contains most of the mass in our Solar System and provides the light and heat that make life on Earth possible.'},
 Mercury:{type:'Rocky planet',distance:'57.9 million km',year:'88 Earth days',fact:'Mercury is the smallest planet and the closest to the Sun. Its surface is covered in impact craters.'},
 Venus:{type:'Rocky planet',distance:'108.2 million km',year:'225 Earth days',fact:'Venus is the hottest planet, with a thick atmosphere that traps heat.'},
 Earth:{type:'Rocky planet',distance:'149.6 million km',year:'365.25 days',fact:'Earth is our home and the only known planet with liquid water on its surface and life.'},
 Moon:{type:'Natural satellite',distance:'384,400 km from Earth',year:'27.3 days around Earth',fact:'The Moon is Earth’s only natural satellite. Its gravity contributes to ocean tides.'},
 Mars:{type:'Rocky planet',distance:'227.9 million km',year:'687 Earth days',fact:'Mars is called the Red Planet because iron minerals in its soil have rusted.'},
 Jupiter:{type:'Gas giant',distance:'778.6 million km',year:'11.86 Earth years',fact:'Jupiter is the largest planet. Its Great Red Spot is a storm larger than Earth.'},
 Saturn:{type:'Gas giant',distance:'1.43 billion km',year:'29.4 Earth years',fact:'Saturn’s spectacular rings are made mostly of countless pieces of ice and rock.'},
 Uranus:{type:'Ice giant',distance:'2.87 billion km',year:'84 Earth years',fact:'Uranus rotates on its side, with an extreme tilt of about 98 degrees.'},
 Neptune:{type:'Ice giant',distance:'4.50 billion km',year:'164.8 Earth years',fact:'Neptune is the most distant planet and has some of the fastest winds in the Solar System.'}
};
window.makePlanetPanel = function(onSelect) {
 const holder=document.createElement('section'); holder.id='planet-ui'; holder.innerHTML=`<div class="planet-bar"><label for="planet-select">Explore a world</label><div class="pick-row"><select id="planet-select"><option value="">Choose a world</option>${Object.keys(PLANETS).map(n=>`<option>${n}</option>`).join('')}</select><button class="surprise" type="button" aria-label="Discover a random world" title="Discover a random world">✦</button></div></div><article class="planet-card" hidden aria-live="polite"><button class="close-info" type="button" aria-label="Close planet details">×</button><span class="info-tag"></span><h2></h2><p class="fact"></p><dl><div><dt>Average distance</dt><dd class="distance"></dd></div><div><dt>Year / orbit</dt><dd class="year"></dd></div></dl><small>Distances are approximate. The model is not to scale.</small></article>`;
 document.body.append(holder); const select=holder.querySelector('select'),card=holder.querySelector('article');
 function show(name){const p=PLANETS[name];if(!p)return; select.value=name;card.hidden=false;card.querySelector('h2').textContent=name;card.querySelector('.info-tag').textContent=p.type;card.querySelector('.fact').textContent=p.fact;card.querySelector('.distance').textContent=p.distance+(name==='Sun'||name==='Moon'?'':' from Sun');card.querySelector('.year').textContent=p.year;}
 select.addEventListener('change',()=>{if(select.value){show(select.value);onSelect?.(select.value)}});
 holder.querySelector('.surprise').addEventListener('click',()=>{const names=Object.keys(PLANETS).filter(n=>n!==select.value);const name=names[Math.floor(Math.random()*names.length)];show(name);onSelect?.(name)});
 holder.querySelector('.close-info').addEventListener('click',()=>{card.hidden=true;select.value='';});
 return {show};
};
