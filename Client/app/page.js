"use client";
import Link from "next/link";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import { useRouter } from "next/navigation";
import "./app.css";
import Image from 'next/image'; 
import image from './assets/noFeedback.jpg'

export default function Home() {
  const router = useRouter();
  return (
    <div className="conatainer">
      <div className="left-content">
        <div className="sidebar">
          <div className="sidebar-text">
            <p>
              <span>Eqaim</span>
              <br />
              Feedback Board
            </p>
          </div>
        </div>
        <div className="mid-section">
          <div className="mid-section1">
            <button>All</button>
            <button>UI</button>
            <button>UX</button>
            <button>Enhancement</button>
            <button>Bug</button>
            <button>Feature</button>
          </div>
        </div>

        <div className="third-section">
          <div className="third-section1">
            <div className="third-section2">
              <span>Roadmap</span>
              <Link href="/">View</Link>
            </div>
            <div className="third-section2">
              <span>Planed</span>
              <span>2</span>
            </div>
            <div className="third-section2">
              <span>In-progress</span>
              <span>3</span>
            </div>
            <div className="third-section2">
              <span>Live</span>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="header">
          <div className="Container">
            <div className="inner-container">
              <EmojiObjectsTwoToneIcon />
              <p>Suggestions</p>
            </div>
            <div className="Container1">
              <p>Sort by :</p>
              <select>
                <option>Most Upvotes</option>
                <option>Least Upvotes</option>
                <option>Most Comments</option>
                <option>Least Comments</option>
              </select>
            </div>
          </div>
          <div>
            <button className="button" onClick={() => router.push("/feedback")}>
              + Add Feedback
            </button>
          </div>
        </div>
        <div className="container2">
          <div className="inner-container2">
            <Image src= {image}/>
            <h3>There is no feedback yet</h3>
            <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
          <button className="button" onClick={() => router.push("/feedback")}> + Add Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
}
