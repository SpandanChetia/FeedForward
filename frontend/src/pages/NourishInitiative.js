import { Typography, Stack } from "@mui/material";
import React from "react";

const Card = ({ title, subtitle, description }) => {
  return (
    <div className="card">
      <div className="temporary_text"></div>
      <div className="card_content">
        <span className="card_title">{title}</span>
        <span className="card_subtitle">{subtitle}</span>
        <p className="card_description">{description}</p>
      </div>
    </div>
  );
};

const NourishInitiative = () => {
  return (
    <>
    <Stack alignItems={'center'} mt={'200px'} mb={'100px'}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontSize: "196px",
          letterSpacing: "-10px",
          lineHeight: "210px",
          mb:'100px',
          fontFamily: "Pathway Extreme, sans-serif",
        }}
      >
        <div class="Month-name">
        June
        </div>
      </Typography>
      <div className="card-container">
        <Card
          title="4th June Weekly Meal"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="Grand Feast Sunday"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
      </div>
    </Stack>

    <Stack alignItems={'center'} mt={'200px'} mb={'100px'}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontSize: "196px",
          letterSpacing: "-10px",
          lineHeight: "210px",
          mb:'100px',
          fontFamily: "Pathway Extreme, sans-serif",
        }}
      >
        <div class="Month-name">
        July
        </div>
      </Typography>
      <div className="card-container">
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
      </div>
    </Stack>

    <Stack alignItems={'center'} mt={'200px'} mb={'100px'}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontSize: "196px",
          letterSpacing: "-10px",
          lineHeight: "210px",
          mb:'100px',
          fontFamily: "Pathway Extreme, sans-serif",
        }}
      >
        <div class="Month-name">
        August
        </div>
      </Typography>
      <div className="card-container">
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
      </div>
    </Stack>


    <Stack alignItems={'center'} mt={'200px'} mb={'100px'}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontSize: "196px",
          letterSpacing: "-10px",
          lineHeight: "210px",
          mb:'100px',
          fontFamily: "Pathway Extreme, sans-serif",
        }}
      >
        <div class="Month-name">
        September
        </div>
      </Typography>
      <div className="card-container">
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
      </div>
    </Stack>

    <Stack alignItems={'center'} mt={'200px'} mb={'100px'}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontSize: "196px",
          letterSpacing: "-10px",
          lineHeight: "210px",
          mb:'100px',
          fontFamily: "Pathway Extreme, sans-serif",
        }}
      >
        <div class="Month-name">
        October
        </div>
      </Typography>
      <div className="card-container">
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
      </div>
    </Stack>

    <Stack alignItems={'center'} mt={'200px'} mb={'100px'}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontSize: "196px",
          letterSpacing: "-10px",
          lineHeight: "210px",
          mb:'100px',
          fontFamily: "Pathway Extreme, sans-serif",
        }}
      >
        <div class="Month-name">
        November
        </div>
      </Typography>
      <div className="card-container">
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
      </div>
    </Stack>

    <Stack alignItems={'center'} mt={'200px'} mb={'100px'}>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          fontSize: "196px",
          letterSpacing: "-10px",
          lineHeight: "210px",
          mb:'100px',
          fontFamily: "Pathway Extreme, sans-serif",
        }}
      >
        <div class="Month-name">
        December
        </div>
      </Typography>
      <div className="card-container">
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
        <Card
          title="This is a Title"
          subtitle="This is a subtitle of this page. Let us see how it looks on the Web."
          description="Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat."
        />
      </div>
    </Stack>

    </>
  );
};

export default NourishInitiative;