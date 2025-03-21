CREATE TABLE "submission" (
	"submission_id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"colors" json NOT NULL,
	"encoded" text NOT NULL,
	"created_on" timestamp DEFAULT now() NOT NULL
);
