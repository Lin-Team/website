<script>
    import TeamDescription from "../components/index/TeamDescription.svelte";
    import GameplayTournament from "../components/gpt/GameplayTournament.svelte";
    
    import { db } from '../lib/database.js';
    import { ref, onValue } from "firebase/database";

    const indexRef = ref(db, '/index');
    let indexData = {
        team_description: "..."
    };

    const gptRef = ref(db, '/gameplay_tournament');
    let gptData = null;

    onValue(indexRef, (snapshot) => {
        const data = snapshot.val();
        indexData = data;
    });

    onValue(gptRef, (snapshot) => {
        const data = snapshot.val();
        gptData = data;
    });
</script>

<svelte:head>
    <title>Главная | Lin Team</title>
</svelte:head>

<h2 class="text-center">Главная страница</h2>

<TeamDescription descriptionText={indexData.team_description} />
<GameplayTournament gptData={gptData} />