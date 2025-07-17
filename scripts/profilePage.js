import { getCharacterProfile } from './profileController.js';

const username = 'ARJUNA_99';
const char = await getCharacterProfile(username);

if (char) {
    console.log('data karakter ada');
    document.getElementById('player-name').innerText = char.player.username;
    document.getElementById('player-level').innerText = "Lv." + char.level;
    document.getElementById('player-col').innerText = char.player.total_col;
    document.getElementById('player-gems').innerText = char.player.arcana_gems;
    document.getElementById('player-tp').innerText = char.total_power;
    document.getElementById('player-attack').innerText = char.attack;
    document.getElementById('player-defense').innerText = char.defense;
    document.getElementById('player-maxhp').innerText = char.max_hp;
    document.getElementById('player-maxmp').innerText = char.max_mp;
    hideLoadingOverlay();
} else {
    console.log('gak ada data karakternya')
}