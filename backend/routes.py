from flask import request, jsonify
from models import db, Job


def register_routes(app):

    @app.route("/jobs", methods=["GET"])
    def get_jobs():

        jobs = Job.query.all()

        return jsonify([{

            "id": job.id,
            "company": job.company,
            "role": job.role,
            "status": job.status,
            "created_at": job.created_at
        } for job in jobs])


    @app.route("/jobs", methods=["POST"])
    def create_job():

        data = request.json
        job = Job(

            company=data["company"],  # type: ignore

            role=data["role"],  # type: ignore
            status=data["status"]  # type: ignore

        )

        db.session.add(job)

        db.session.commit()
        return jsonify({"message": "Job created"})


    @app.route("/jobs/<int:id>", methods=["DELETE"])
    def delete_job(id):

        job = Job.query.get(id)
        db.session.delete(job)
        db.session.commit()

        return jsonify({"message": "Deleted"})