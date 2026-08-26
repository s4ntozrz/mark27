/*
 * PREPARAÇÃO PARA FIREBASE (OPCIONAL)
 * 
 * Atualmente, esta aplicação funciona 100% offline e de forma estática no navegador.
 * Para adicionar funcionalidades de Cloud no futuro (salvar documentos, login):
 * 
 * 1. Crie um projeto no Firebase Console.
 * 2. Adicione as bibliotecas via CDN no index.html:
 *    <script type="module">
 *      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js";
 *      import { getFirestore } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-firestore.js";
 *      
 *      const firebaseConfig = {
 *        apiKey: "SUA_API_KEY",
 *        authDomain: "SEU_DOMAIN",
 *        projectId: "SEU_PROJECT_ID"
 *      };
 *      
 *      const app = initializeApp(firebaseConfig);
 *      const db = getFirestore(app);
 *      window.firebaseDB = db; // Disponibiliza para o app.js
 *    </script>
 * 
 * 3. A arquitetura atual permite plugar o Firebase facilmente escutando cliques em 
 *    um futuro botão "Salvar na Nuvem" sem alterar a lógica local de conversão.
 */