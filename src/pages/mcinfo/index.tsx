import Button from "@/components/ui/button/Button";
import Heading from "@/components/ui/heading/Heading";
import SubHeading from "@/components/ui/heading/SubHeading";
import Paragraph from "@/components/ui/paragraph/Paragraph";

const McInfoPage = () => {
  return (
    <div className="p-8 my-4 border border-neutral-800 rounded-lg">
      <Heading>IP: mc.tetra.lol</Heading>
      <Paragraph>smiga na 1.20.1</Paragraph>
      <hr className="my-4 border-neutral-800" />
      <Paragraph>
        na serwie jest voice mod, musisz go u siebie pobrac zeby korzystac z
        voice chatu:
      </Paragraph>
      <Paragraph>
        od siebie polecam launcher <b>prisma launcher</b>, zaleznie od tego czy
        masz premke pobierasz albo oryginalnego albo zcrackowanego (zeby odpalac
        nonpremium)
      </Paragraph>
      <hr className="my-4 border-neutral-800" />
      <SubHeading>Launcher</SubHeading>
      <div className="flex gap-4 my-3 items-center">
        <Button className="w-fit" href="https://prismlauncher.org/download/">
          dla premium
        </Button>
        <Button
          className="w-fit"
          href="https://github.com/Diegiwg/PrismLauncher-Cracked/releases/tag/7.1"
        >
          dla non premium
        </Button>
        <span>
          *dla non premium chyba wersja{" "}
          <i className="text-tetra-800">
            PrismLauncher-Windows-MinGW-w64-Setup-7.1.exe
          </i>{" "}
          bedzie git
        </span>
      </div>
      <hr className="my-4 border-neutral-800" />
      <SubHeading>instalowanie voice moda</SubHeading>
      <Paragraph>
        prisma launcher umozliwia latwe instalowanie modow, wiec powinno byc to
        banalnie proste. ruwniez polecam od sb pobranie gotowej paczki
        &quot;fabulously optimized&quot; (daje duzo fpsow)
      </Paragraph>
      <Paragraph className="py-8">
        tworzysz nowa instancje na <b>fabricu (wazne!)</b> na wersji 1.20.1,
        wchodzisz w ustawienia instancji, zakladka mody, wyszukujesz moda o
        nazwie <i>Simple Voice Chat</i>{" "}
        <a
          className="underline text-tetra-800"
          target="_blank"
          href="https://modrinth.com/plugin/simple-voice-chat"
        >
          (to ten mod)
        </a>{" "}
        dodajesz i tyle, powinno smigac
      </Paragraph>
      <Paragraph className="p-8 bg-neutral-800 rounded-lg">
        oczywiscie forma poradnika dla srednio rozgarnietych zyciowo i
        technicznie krok po kroku tutaj:
        <Button className="bg-tetra-600 text-white" href="https://youtube.com">
          poradnik dla srednio rozgarnietych zyciowo i technicznie
        </Button>
      </Paragraph>
      <Heading>IP: mc.tetra.lol</Heading>
      <Heading>IP: mc.tetra.lol</Heading>
      <Heading>IP: mc.tetra.lol</Heading>
      <Heading>IP: mc.tetra.lol</Heading>
    </div>
  );
};

export default McInfoPage;
