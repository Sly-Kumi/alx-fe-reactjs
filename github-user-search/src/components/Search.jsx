import { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await fetchUserData(query);

const data = await searchUsers(query, location, minRepos);
setUsers(data.items);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 bg-white p-6 rounded shadow"
      >
        <input
          type="text"
          placeholder="GitHub username"
          className="border p-2 rounded"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum repositories"
          className="border p-2 rounded"
          value={minRepos}
          onChange={(event) => setMinRepos(event.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && (
        <p className="text-center text-red-500 mt-4">
          Looks like we cant find the user
        </p>
      )}

      {/* Enhanced results display using map */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded shadow flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt="avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 text-sm"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;