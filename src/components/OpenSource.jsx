import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Code2,
  ExternalLink,
  GitPullRequest,
  Star,
} from "lucide-react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { openSourceContributions } from "../constants";
import { simpleFadeIn } from "../utils/motion";

const numberFormatter = new Intl.NumberFormat("en-US");
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const formatDate = (date) => dateFormatter.format(new Date(date));

const OpenSourceCard = ({ contribution, index }) => {
  const [stats, setStats] = useState(contribution.fallback);

  useEffect(() => {
    let isMounted = true;

    const loadGitHubStats = async () => {
      try {
        const requests = [
          fetch(contribution.repoApiUrl),
          fetch(contribution.pullApiUrl),
        ];

        if (contribution.languagesApiUrl) {
          requests.push(fetch(contribution.languagesApiUrl));
        }

        const [repoResponse, pullResponse, languagesResponse] = await Promise.all(requests);

        if (!repoResponse.ok || !pullResponse.ok) return;

        const dataRequests = [
          repoResponse.json(),
          pullResponse.json(),
        ];

        if (languagesResponse?.ok) {
          dataRequests.push(languagesResponse.json());
        }

        const [repoData, pullData, languagesData = {}] = await Promise.all(dataRequests);
        const topLanguage = Object.entries(languagesData).sort((a, b) => b[1] - a[1])[0]?.[0];

        if (!isMounted) return;

        setStats({
          stars: repoData.stargazers_count ?? contribution.fallback.stars,
          additions: pullData.additions ?? contribution.fallback.additions,
          deletions: pullData.deletions ?? contribution.fallback.deletions,
          changedFiles: pullData.changed_files ?? contribution.fallback.changedFiles,
          language: repoData.language ?? topLanguage ?? contribution.fallback.language,
          status: pullData.merged_at ? "Merged" : pullData.state,
          createdAt: pullData.created_at ?? contribution.fallback.createdAt,
          mergedAt: pullData.merged_at ?? contribution.fallback.mergedAt,
        });
      } catch {
        setStats(contribution.fallback);
      }
    };

    loadGitHubStats();

    return () => {
      isMounted = false;
    };
  }, [contribution]);

  const mergedStatus = String(stats.status || "").toLowerCase() === "merged";

  return (
    <motion.div
      variants={simpleFadeIn(index * 0.05, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.01 }}
      className="relative bg-black p-[2px] rounded-lg transition-transform border border-white/30 hover:border-[#37b54a]"
      whileHover={{ scaleY: 1.03 }}
    >
      <div className="relative bg-black p-5 rounded-lg w-full overflow-hidden">
        <a
          href={contribution.pullRequestLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-10"
        >
          <button className="flex items-center gap-2 px-3 py-1.5 text-base font-bold text-[#37b54a] border border-white/30 bg-black rounded-lg transition-transform duration-200 hover:scale-105 hover:border-[#37b54a]">
            LINK
            <ExternalLink size={16} aria-hidden="true" />
          </button>
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-[190px_1fr] gap-6">
          <div className="relative w-full max-w-[190px] aspect-square justify-self-start rounded-lg overflow-hidden border border-white/20 bg-[#161b22]">
            <img
              src={contribution.image}
              alt={`${contribution.repo} logo`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="pr-0 sm:pr-24">
            <div className="flex flex-wrap items-center gap-3 text-secondary text-[18px] font-semibold">
              <span className="text-white">{contribution.repo}</span>
              <span className="flex items-center gap-1">
                <Star size={18} aria-hidden="true" />
                {numberFormatter.format(stats.stars)}
              </span>
            </div>

            <h3 className="mt-4 text-[#37b54a] font-bold text-[24px] leading-tight">
              {contribution.title}
            </h3>

            <p className="mt-3 text-secondary text-[19px] leading-[30px]">
              {contribution.description}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-[17px] font-semibold">
              <span className="inline-flex items-center gap-2 rounded-lg bg-[#6f42c1]/20 px-3 py-2 text-[#c9a7ff] border border-[#6f42c1]/50">
                <GitPullRequest size={18} aria-hidden="true" />
                {mergedStatus ? "Merged" : stats.status}
              </span>
              <span className="inline-flex items-center gap-2 text-secondary">
                <span className="h-3 w-3 rounded-full bg-[#3178c6]" />
                {stats.language}
              </span>
              <span className="text-[#37d67a]">+{numberFormatter.format(stats.additions)}</span>
              <span className="text-[#ff6b6b]">-{numberFormatter.format(stats.deletions)}</span>
              <span className="inline-flex items-center gap-2 text-secondary">
                <Code2 size={18} aria-hidden="true" />
                {stats.changedFiles} files
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-secondary text-[16px]">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={17} aria-hidden="true" />
                Created {formatDate(stats.createdAt)}
              </span>
              {stats.mergedAt && <span>- Merged {formatDate(stats.mergedAt)}</span>}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const OpenSource = () => {
  return (
    <>
      <motion.div
        variants={simpleFadeIn(0.05, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.01 }}
        className="mx-auto w-fit px-6 py-4 mt-10 bg-black/80 rounded-xl backdrop-blur-md"
      >
        <p className={`${styles.sectionSubText} text-center text-[#37b54a]`}>
          Contributions
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>
          Open Source
        </h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 gap-8">
        {openSourceContributions.map((contribution, index) => (
          <OpenSourceCard
            key={contribution.pullRequestLink}
            contribution={contribution}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(OpenSource, "opensource");
