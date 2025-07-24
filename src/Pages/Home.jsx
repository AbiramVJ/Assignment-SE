import React, { useEffect, useState } from "react";
import { fetchRepositories } from "../Services/githubService";
import RepoCard from "../Components/RepoCard/RepoCard";
import ReactPaginate from "react-paginate";
import "./Home.css";

const itemPerPage = 6;

const Home = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  const loadRepos = async (page) => {
    setLoading(true);
    const { items, total_count } = await fetchRepositories(page, itemPerPage);
    setRepos(items || []);
    setPageCount(Math.min(Math.ceil(total_count / itemPerPage), 100));
    setLoading(false);
  };

  useEffect(() => {
    loadRepos(page);
  }, [page]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <div className="container mt-4">
      <div className="p-3 border rounded bg-danger text-white mb-3">
        <h1 className="text-center mb-4">
          Most Starred GitHub Repositories (Last 10 Days)
        </h1>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="row">
            {repos.map((repo) => (
              <div className="col-12 col-md-6 mb-4" key={repo.id}>
                <RepoCard repo={repo} />
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center mt-4">
            <ReactPaginate
              previousLabel={"←"}
              nextLabel={"→"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
              forcePage={page - 1}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
