import ProfilePage from './components/ProfilePage'
import Counter from './components/Counter'
import UserContext from './components/UserContext' 

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div><Counter /> </div>
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  )
}

export default App;
