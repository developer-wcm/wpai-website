import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import DoctrineItem from "@/components/DoctrineItem";

export const metadata: Metadata = {
  title: "About Us",
  description: "Doctrinal Statement of Washington Pentecostal Assembly International.",
};

const DOCTRINES = [
  {
    number: "1", title: "TRINITY",
    content: `We believe that there is one God, eternally existent in three persons: Father, Son and Holy Spirit; that the Father, the Son and the Holy Spirit are never identical as to person, nor confused as to relation, nor divided in respect to the Godhead, nor opposed as to co-operation.`,
    sub: [
      { label: "a) FATHER",      text: "We believe the God the Father is eternal, omniscient, omnipresent and omnipotent. God is absolutely holy, righteous and just. His love and mercy were manifested in the atoning death of His only begotten Son on Calvary." },
      { label: "b) SON",         text: "We believe in the deity of our Lord Jesus Christ, His virgin birth, His sinless life, His miracles, His vicarious sufferings and atoning death through His shed blood, His bodily resurrection, His ascension to the right hand of the Father and His personal return in power and glory." },
      { label: "c) HOLY SPIRIT", text: "We believe that the Holy Spirit is a person; convicts the world of sin, of righteousness and of judgment; is the supernatural agent of God in the regeneration of the lost; dwells in all believers, sealing them in the body of Christ unto the day of redemption; is the divine teacher, who guides believers into all truth and imparts to every man severally as he will the nine gifts of the Spirit as found in 1 Corinthians 12." },
    ],
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=700&q=80&auto=format&fit=crop",
    imageAlt: "Open Bible",
  },
  {
    number: "2", title: "HOLY SCRIPTURE",
    content: `We believe that scripture of the Old and New Testament is given by inspiration of God, is inerrant and infallible in its original writings and is the supreme and final authority for faith and practice.`,
    sub: [],
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=700&q=80&auto=format&fit=crop",
    imageAlt: "Person reading the Bible",
  },
  {
    number: "3", title: "TOTAL DEPRAVITY OF MAN",
    content: `We believe that man was originally created in the image of God, but that the whole humanity was separated from God by the sin of Adam. Therefore, we believe that except a man be born again by the Holy Spirit, he cannot reconcile with God and thereby cannot enter the Kingdom of God.`,
    sub: [],
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=700&q=80&auto=format&fit=crop",
    imageAlt: "Worship and prayer",
  },
  {
    number: "4", title: "SATAN",
    content: `We believe that Satan is the adversary of God and the cause of the fall of man and that he will be tormented eternally in the lake of fire, which is reserved for the Devil and his angels and whosoever is not found written in the book of life.`,
    sub: [],
    image: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=700&q=80&auto=format&fit=crop",
    imageAlt: "Church community in prayer",
  },
  {
    number: "5", title: "SALVATION",
    content: `We believe that salvation is a gift of God by grace alone and is received through repentance and personal faith in the Lord Jesus Christ and that this faith is manifested in loving obedience and good works.`,
    sub: [],
    image: "/SALVATION.jpg",
    imageAlt: "Salvation — gift of God by grace",
  },
  {
    number: "6", title: "HEAVEN AND HELL",
    content: `We believe that heaven is the dwelling place of God and the eternal home of the saints, and that hell is a place of sorrow into which the unsaved are turned and a place eternally separated from God.`,
    sub: [],
    image: "https://images.unsplash.com/photo-1438232992991-995b671e4668?w=700&q=80&auto=format&fit=crop",
    imageAlt: "Worship service",
  },
  {
    number: "7", title: "THE CHURCH",
    content: `We believe that the Church, composed of all born-again believers irrespective of race, nationality, sex and color, is the body of Christ of which Christ is the Head. Local church comprises born again believers united together for worship, instruction, and Christian service.`,
    sub: [],
    image: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=700&q=80&auto=format&fit=crop",
    imageAlt: "Church congregation",
  },
  {
    number: "8", title: "ORDINANCES",
    content: "",
    sub: [
      { label: "a) WATER BAPTISM", text: "We believe that baptism in water should be by immersion in the name of the Father, the Son and the Holy Spirit and shall be administered to only those who give evidences of being born again." },
      { label: "b) LORD'S SUPPER", text: "We believe that the Lord's Supper is to be observed by all believers who are baptized in water. All participants should examine themselves before partaking. It is a memorial of our Lord's sufferings and sacrificial death and is to be observed until He returns." },
    ],
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=700&q=80&auto=format&fit=crop",
    imageAlt: "Baptism and communion",
  },
  {
    number: "9", title: "BAPTISM OF HOLY SPIRIT",
    content: `We believe that the baptism of the Holy Spirit is a definite experience, subsequent and additional to salvation. In salvation or new birth eternal life is imparted by the Holy Spirit; and in baptism of the Spirit eternal power is imparted. Speaking with other tongues is the initial, physical evidence of having received this endowment of power.`,
    sub: [],
    image: "/holy.jpg",
    imageAlt: "Holy Spirit worship",
  },
  {
    number: "10", title: "HOLINESS",
    content: `We believe that the Bible teaches the life of holiness "without which no man shall see the Lord." Sanctification is the will of God for all believers and should be earnestly pursued by walking in obedience to the Word of God.`,
    sub: [],
    image: "/Holiness.jpg",
    imageAlt: "Holy living and worship",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        breadcrumb="About Us"
        image="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1600&q=80&auto=format&fit=crop"
      />

      {/* Doctrinal Statement */}
      <section style={{ background: "#fff", padding: "0 16px 80px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Heading */}
          <div style={{ textAlign: "center", padding: "64px 0 8px" }}>
            <h2 style={{
              fontFamily: "var(--font-montserrat),'Montserrat',sans-serif",
              fontSize: "clamp(1.4rem,3vw,2rem)",
              fontWeight: 800, color: "#0f2347",
              textTransform: "uppercase", letterSpacing: "0.1em",
              marginBottom: "12px",
            }}>
              Doctrinal Statement
            </h2>
            <div style={{
              width: "48px", height: "3px",
              background: "#c8a84b",
              borderRadius: "2px", margin: "0 auto",
            }} />
          </div>

          {/* Alternating doctrine rows */}
          {DOCTRINES.map((d, i) => (
            <DoctrineItem
              key={d.number}
              number={d.number}
              title={d.title}
              content={d.content}
              sub={d.sub}
              image={d.image}
              imageAlt={d.imageAlt}
              flip={i % 2 === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
}
