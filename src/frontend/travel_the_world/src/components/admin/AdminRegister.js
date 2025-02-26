//const AdminRegister = () => {
//    const [email, setEmail] = useState("");
//    const [password, setPassword] = useState("");
//
//    const handleRegister = async (e) => {
//        e.preventDefault();
//        try {
//            await axios.post("http://localhost:8080/api/admin/register", { email, password });
//            alert("Admin registered successfully!");
//        } catch (error) {
//            console.error("Registration failed:", error);
//        }
//    };
//
//    return (
//        <div>
//            <h2>Admin Registration</h2>
//            <form onSubmit={handleRegister}>
//                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//                <button type="submit">Register</button>
//            </form>
//        </div>
//    );
//};
//
//export default AdminRegister;
