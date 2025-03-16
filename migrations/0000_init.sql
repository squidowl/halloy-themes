CREATE TABLE "theme" (
	"theme_id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"data" json NOT NULL,
	"encoded" text NOT NULL,
	"submitted_by" text NOT NULL,
	"created_on" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "theme_name_unique" UNIQUE("name")
);
