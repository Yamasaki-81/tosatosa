// すべての電停をループしてマーカーを作成
stations.forEach(st => {
    const marker = L.marker(st.pos, {
        icon: L.divIcon({
            className: 'st-dot',
            html: '<div style="width:12px;height:12px;background:white;border:3px solid var(--tosaden);border-radius:50%"></div>',
            iconSize: [12, 12]
        })
    }).addTo(map);

    // 名前ラベルを常に表示
    marker.bindTooltip(st.name, {
        permanent: true,
        direction: 'bottom',
        offset: [0, 10],
        className: 'st-label'
    });
    
    // クリックした時にハーフモーダルを表示
    marker.on('click', () => showStation(st));
});
// 3. 電停データ（大幅増量版）
const stations = [
    { name: "高知駅前", pos: [33.5670, 133.5430], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kochi-Station-2012.jpg/640px-Kochi-Station-2012.jpg", desc: "JRとの接続点。三志士像がお出迎えぜよ。", times: ["13:00", "13:15", "13:30"] },
    { name: "蓮池町通", pos: [33.5620, 133.5430], img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Hasuikecho-dori_Station_2016.jpg", desc: "日曜市へのアクセスも便利ぜよ。", times: ["13:02", "13:17", "13:32"] },
    { name: "はりまや橋", pos: [33.5594, 133.5430], img: "https://images.unsplash.com/photo-1590233735500-1ad733008433?auto=format&fit=crop&w=800&q=80", desc: "東西・南北が交差する、とさでんの心臓部ぜよ！", times: ["13:05", "13:20", "13:35"] },
    { name: "堀詰", pos: [33.5594, 133.5380], img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Horizume_Station_2016.jpg", desc: "中心商店街「帯屋町」のすぐ近くぜよ。", times: ["13:07", "13:22", "13:37"] },
    { name: "大橋通", pos: [33.5594, 133.5340], img: "https://upload.wikimedia.org/wikipedia/commons/0/02/Ohashidori_Station_2016.jpg", desc: "ひろめ市場へ行くならここが一番近いぜよ！", times: ["13:09", "13:24", "13:39"] },
    { name: "高知城前", pos: [33.5594, 133.5300], img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Kochi_Castle_01.jpg", desc: "立派な高知城が見える電停ぜよ。", times: ["13:11", "13:26", "13:41"] },
    { name: "鏡川橋", pos: [33.5594, 133.5150], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kagamigawabashi_Station_2016.jpg/640px-Kagamigawabashi_Station_2016.jpg", desc: "ここから先は単線、のどかな風景に変わるぜよ。", times: ["13:20", "13:35", "13:50"] },
    { name: "知寄町", pos: [33.5594, 133.5650], img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Chiyoricho_Station_2016.jpg", desc: "東エリアの重要拠点ぜよ。", times: ["13:10", "13:25", "13:40"] },
    { name: "後免町", pos: [33.5594, 133.6450], img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Gomenmachi_Station_2016.jpg", desc: "後免線の終点。ごめん駅に繋がるぜよ。", times: ["13:50", "14:10"] },
    { name: "桟橋通二丁目", pos: [33.5500, 133.5430], img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sambashidori-Nichome_Station_2016.jpg", desc: "桟橋線の途中駅ぜよ。", times: ["13:10", "13:30"] },
    { name: "桟橋通五丁目", pos: [33.5400, 133.5430], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sambashidori-Gochome_Station_2016.jpg/640px-Sambashidori-Gochome_Station_2016.jpg", desc: "桟橋線の終点ぜよ。", times: ["13:15", "13:35"] }
];
// 電停マーカー作成部分の修正
stations.forEach(st => {
    const marker = L.marker(st.pos, {
        icon: L.divIcon({
            className: 'st-dot', 
            // 少し大きく、中心を強調
            html: '<div style="width:16px;height:16px;background:white;border:4px solid var(--tosaden);border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,0.2);"></div>',
            iconSize: [16, 16]
        })
    }).addTo(map);

    // 常に表示されるラベルに「🕒」を付けて、"時刻表感"を出す
    marker.bindTooltip(`🕒 ${st.name}`, { 
        permanent: true, 
        direction: 'bottom', 
        offset: [0, 10], 
        className: 'st-label' 
    });

    marker.on('click', () => showStation(st));
});

// メニューの開閉
function toggleDrawer() {
    document.getElementById('drawer').classList.toggle('active');
}

// リストの生成（既存の stations 配列を使用）
const drawerContent = document.getElementById('drawer-items');
stations.forEach(st => {
    const item = document.createElement('div');
    item.className = 'drawer-item';
    item.innerHTML =// initDrawer関数の中を修正
function initDrawer() {
    drawerItems.innerHTML = ''; 
    stations.forEach(st => {
        const item = document.createElement('div');
        item.style.cssText = `
            padding: 18px 20px;
            border-bottom: 1px solid #eee;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 500;
        `;
        // ここで電停名の前に時計マークを追加
        item.innerHTML = `<span style="font-size:1.2rem;">🕒</span> <span>${st.name}</span>`;
        
        item.addEventListener('click', () => {
            toggleDrawer();
            showStation(st); 
        });
        
        drawerItems.appendChild(item);
    });
}
    item.onclick = () => {
        toggleDrawer(); // メニューを閉じる
        showStation(st); // 地図を移動して時刻表を表示
    };
    drawerContent.appendChild(item);
});

// 地図をタップしたらメニューを閉じるように設定（利便性のため）
map.on('click', () => {
    document.getElementById('drawer').classList.remove('active');
});
