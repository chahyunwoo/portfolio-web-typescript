export default function ProjectsTab({ activeTab, handleTabChange }: any) {
  return (
    <div className="tabs">
      <button
        className={activeTab === "all" ? "active" : ""}
        onClick={() => handleTabChange("all")}
      >
        All
      </button>
      <button
        className={activeTab === "bussiness" ? "active" : ""}
        onClick={() => handleTabChange("bussiness")}
      >
        Business
      </button>
      <button
        className={activeTab === "personal" ? "active" : ""}
        onClick={() => handleTabChange("personal")}
      >
        Personal
      </button>
    </div>
  );
}
