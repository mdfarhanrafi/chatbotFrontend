import Chat from "@/components/chat";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    
      <main className="flex gap-8 row-start-2 items-center sm:items-start">
       <Sidebar/>        
       <Chat/>
      </main>
      
  
  );
}
