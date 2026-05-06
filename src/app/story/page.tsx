import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = { title: "The Story — Willy Foundation" };

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="The Story"
        title="The man who built the hands."
        lead="Forty years inside South African music. The clubs he ran, the festivals he produced, the artists he raised. And the night his sight began to go."
        meta={[
          { k: "Born", v: "1958, Alexandra" },
          { k: "In music since", v: "1984" },
          { k: "Visually impaired since", v: "2018" },
        ]}
      />
      <section className="band cream">
        <div className="container">
          <article className="editorial">
            <h2 style={{ marginTop: 0 }}>The Music Years</h2>
            <p className="dropcap">
              Before the Foundation, before the diagnosis, before he learned the shape of a room
              with his hand instead of his eye, there were the clubs. The Pelican in Hillbrow on a
              Wednesday. The Rocket in Soweto on a Friday. Bra Willy was twenty-six and already the
              man you went to if you wanted a saxophone player by the weekend.
            </p>
            <p>
              He started Sweet Sounds Records in 1991, in a converted garage in Yeoville, with two
              reel-to-reels and a microphone borrowed from his cousin. The label put out three
              hundred and twenty-seven records over its first decade. Most never made the radio.
              Eleven of them are now on the South African National Music Archive.
            </p>
            <figure>
              <div className="img">
                <div className="ph">[ ARCHIVE PHOTO — SWEET SOUNDS STUDIOS, 1994 ]</div>
              </div>
              <figcaption>
                Sweet Sounds Records, 11 Becker Street, Yeoville. Photograph by Santu Mofokeng
                (estate), 1994.
              </figcaption>
            </figure>
            <p>
              He ran the Maboneng Jazz Festival for nine years. He produced two albums for Hugh
              Masekela, three for Sibongile Khumalo, and a debut for a singer everyone now calls
              by one name. He never put his own name on a sleeve. &ldquo;The hands are not the
              song,&rdquo; he told a journalist in 2003. &ldquo;The hands just hold it.&rdquo;
            </p>

            <blockquote>
              <p>
                &ldquo;Every artist I worked with, I told them the same thing. Your voice is not
                for selling. It&apos;s for telling.&rdquo;
              </p>
              <cite>— Bra Willy, in conversation with City Press, 2009</cite>
            </blockquote>

            <h2>The Turn</h2>
            <p>
              The first sign was a glare around the studio monitors that wouldn&apos;t go away.
              Then it was a missed step on a flight he had walked a thousand times. By the time he
              sat down with Dr. Asanda Sithole at Groote Schuur in 2018, the optic nerve damage was
              already eight years old. Glaucoma. Asymptomatic until it isn&apos;t. By then, you
              don&apos;t get the sight back.
            </p>
            <p>
              For eighteen months he didn&apos;t tell anyone. He still went to the studio. He
              still answered the phone at six in the morning. He learned to find his way through
              Yeoville by the smell of the chip shop on the corner. Then his daughter found him
              crying in the kitchen, and the next week he told the truth to a small group of
              people, and one of them was Nnete Nkosi.
            </p>

            <figure>
              <div className="img">
                <div className="ph">[ ARCHIVE — BRA WILLY AND NNETE, T-SHED, 2022 ]</div>
              </div>
              <figcaption>Bra Willy and Nnete Nkosi at T-Shed Community Centre, Tembisa, 2022.</figcaption>
            </figure>

            <h2>The Mandate</h2>
            <p>
              &ldquo;I don&apos;t want a charity that&apos;s about me,&rdquo; he said at the first
              trustee meeting, in a kitchen in Norwood, on a Saturday afternoon. &ldquo;I want one
              that does the work I would have done if I had known.&rdquo;
            </p>
            <p>
              The mandate, as he wrote it on a yellow legal pad that day, is four points long. Get
              the equipment to the people who can&apos;t afford it. Fund the community
              organisations doing the close-up work. Pay for the research that might catch the
              next case in time. And take the message — strength, legacy, community — into the
              rooms where it&apos;s needed.
            </p>

            <blockquote>
              <p>
                &ldquo;Nothing should beat the human spirit. I don&apos;t fear nothing — but I
                know the anxiety is there.&rdquo;
              </p>
              <cite>— Bra Willy, founding statement, 2024</cite>
            </blockquote>

            <h2>What Comes Next</h2>
            <p>
              The Foundation is what comes next. Four programmes, one mandate, a public set of
              books. The first quarterly statement publishes on the 30th of June 2026. The first
              township stop has already happened. The hands are still working.
            </p>
            <div className="mt-3">
              <Link className="btn btn-primary" href="/programmes">
                See the four programmes →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
