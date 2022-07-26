import React, { Fragment } from "react";
import "./ProjectPage.css";
import "../../i18n";
import HeroProject from "../../components/HeroProject";
import ProjectDescription from "../../components/ProjectDescription";
import ToSupportBlock from "../../components/ToSupport-block";
import ProjectAmountReport from "../../components/ProjectAmountReport";
import ProjectPartners from "../../components/ProjectPartners";
import medicalStethoscope from "../../assets/images/medical-stethoscope.jpg";

const ProjectPage = () => {
  // const { t } = useTranslation();

  // компонент має приймати наступні дані

  // ДЛЯ ЗОБРАЖЕННЯ ПРОЕКТУ ТА ТАЙТЛУ
  const title =
    "Потрібно зібрати кошти на допомогу нашим медикам в Миколаївські області";
  const text = "Зараз ми збераємо на першо чергові потреби. Залишилось:";
  const value = "4,518.50";

  // ДЛЯ ОПИСУ ПРОЕКТУ
  const description =
    "Оголошується збір на закупівлю питної води у бутлях (500л) для мешканців Миколаєва. Із-за загострення бойових дів на сході та массивних обстрілів м. Миколаєв, частина населення залишилась без питної води. Протягом тижня йде збір на закупівлю та доставку води у пункти, які потребують допомоги. Усі звіти можете побачити на сторінці “Звіти”.";
  const image = medicalStethoscope;
  const alt = "medical-stethoscope";

  return (
    <>
      {/* <Helmet>
        <meta name="description" content={t("meta_projects.description")} />
        <meta name="keywords" content={t("meta_projects.keywords")} />
        <title>
          {t("site_name")} || {t("nav_projects")}
        </title>
      </Helmet> */}

      <HeroProject title={title} text={text} value={value} />
      <main>
        <div className="main-container">
          <div className="project-content-wrap">
            <div className="project-content-main">
              <ProjectDescription
                description={description}
                image={image}
                alt={alt}
              />
              <ProjectAmountReport
                totalValue="25432.14"
                currentValue="11254.01"
              />
              <ProjectPartners />
            </div>
            <ToSupportBlock />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectPage;
